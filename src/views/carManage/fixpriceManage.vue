<template>
  <div>
    <nav-bar title="定价管理"></nav-bar>
    <Form :label-width="80">
      <Row :gutter="16">
        <Col span="8">
          <Form-item label="车型选择">
            <Select placeholder="请选择" style="width: 120px">
              <Option value="beijing">北京市</Option>
              <Option value="shanghai">上海市</Option>
              <Option value="shenzhen">深圳市</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="4" offset="4">
          <Button type="info">查询</Button>
          <Button type="success">清空</Button>
        </Col>
        <Col span="4" offset="3">
          <Button type="warning" @click.native="showAdd = true">新增</Button>
          <Button type="warning">导出</Button>
        </Col>
      </Row>
    </Form>
    <Modal v-model="showAdd" title="新增定价列表" @on-ok="addFix">
      <Form :label-width="80">
        <Form-item label="所属省份">
          <Select placeholder="请选择" v-if="provice.length">
            <Option v-for="item in provice" :value="item.province_id" :key="item">{{item.name}}</Option>
          </Select>
        </Form-item>
        <Form-item label="城市名称">
          <Select placeholder="请选择" v-model="formData.cityID">
            <Option value="beijing">北京市</Option>
            <Option value="shanghai">上海市</Option>
            <Option value="shenzhen">深圳市</Option>
          </Select>
        </Form-item>
        <Form-item label="县名称">
          <Select placeholder="请选择" v-model="formData.countryID">
            <Option value="beijing">北京市</Option>
            <Option value="shanghai">上海市</Option>
            <Option value="shenzhen">深圳市</Option>
          </Select>
        </Form-item>
        <!-- <Form-item label="县级以下">
          <Input v-model="name" placeholder="请输入县名称"></Input>
        </Form-item> -->
        <Form-item label="车型">
          <Select placeholder="请选择" v-model="formData.carTypeID">
            <Option v-for="item in typeList" :value="item.id" :key="item">{{item.name}}</Option>
          </Select>
        </Form-item>
        <Form-item label="计费方式">
          <Select placeholder="请选择" v-model="formData.feetype">
            <Option value="1">计时</Option>
            <Option value="2">计时＋公里</Option>
          </Select>
        </Form-item>
        <Form-item label="时间段">
          <Select placeholder="请选择" v-model="timeDis">
            <Option value="1">日间档</Option>
            <Option value="2">夜间档</Option>
            <Option value="3">晚上包车</Option>
            <Option value="4">全天用车</Option>
          </Select>
        </Form-item>
        <Form-item label="每小时价格">
          <Input v-model="hourPrice" placeholder="请输入每小时价格"></Input>
        </Form-item>
        <Form-item label="每公里价格" v-show="formData.feetype == '2'">
          <Input v-model="kiloPrice" placeholder="请输入每公里价格"></Input>
        </Form-item>
        <Form-item label="晚上包车">
          <Input v-model="priceContent.night" placeholder="请输入价格"></Input>
        </Form-item>
        <Form-item label="全天用车">
          <Input v-model="priceContent.day" placeholder="请输入价格"></Input>
        </Form-item>
        <Form-item label="打包价">
          2-3天<Input placeholder="请输入价格" v-model="timeDisOne"></Input><br/>
          4-5天<Input placeholder="请输入价格" v-model="timeDisTwo"></Input><br/>
          6-7天<Input placeholder="请输入价格" v-model="timeDisThree"></Input>
        </Form-item>
      </Form>
    </Modal>
    <Table stripe :columns="columns1" :data="dataTable"></Table>
    <Page class-name="pageBox" :total="pageObj.total" :current="pageObj.current_page" :page-size="pageObj.per_page" show-elevator></Page>
    <div class="clear"></div>
  </div>
</template>

<script>
  import GX from '../../utils/gx.js'
  import navBar from '../../components/common/navBar'
  export default {
    data () {
      return {
        columns1: [
          {
            title: '序号',
            key: 'id'
          },
          {
            title: '城市',
            key: 'city'
          },
          {
            title: '县',
            key: 'area'
          },
          {
            title: '车型',
            key: 'car_type'
          },
          {
            title: '时间段',
            key: 'priceContent'
          },
          {
            title: '计价类型',
            key: 'fee_type'
          },
          {
            title: '操作时间',
            key: 'updated_at'
          },
          {
            title: '操作',
            key: 'action',
            fixed: 'right',
            render (h, params) {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'ios-eye',
                    size: '22'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  onClick () {
                    console.log('fsdfsdf')
                  }
                }),
                h('Icon', {
                  props: {
                    type: 'trash-a',
                    size: '22'
                  }
                })
              ])
            }
          }
        ],
        dataTable: [],
        pageObj: {
          total: 1,
          current_page: 1,
          per_page: 20
        },
        showAdd: false,
        // 详细数据
        priceContent: {
          day: '',
          night: ''
        },
        // 省份列表
        provice: [],
        // 包车时间段
        timeDis: '',
        // 打包价格
        disCount: [],
        // 每公里价格
        kiloPrice: 0,
        // 每小时价格
        hourPrice: 0,
        timeDisOne: '',
        timeDisTwo: '',
        timeDisThree: '',
        timeOneArray: [],
        timeTwoArray: [],
        timeThreeArray: [],
        formData: {
          carTypeID: '',
          cityID: '',
          countryID: '',
          disCount: '',
          feetype: '',
          priceContent: {}
        },
        // 车型
        typeList: []
      }
    },
    watch: {
      timeDisOne (val) {
        if (val) {
          this.timeOneArray = []
          this.timeOneArray.push(['2-3', val])
          this.disCount.push(this.timeOneArray)
          console.log('qqq', this.disCount)
        }
      },
      timeDisTwo (val) {
        if (val) {
          this.timeTwoArray = []
          this.timeTwoArray.push(['4-5', val])
          this.disCount.push(this.timeTwoArray)
        }
      },
      timeDisThree (val) {
        if (val) {
          this.timeThreeArray = []
          this.timeThreeArray.push(['6-7', val])
          this.disCount.push(this.timeThreeArray)
        }
      },
      disCount (val) {
        this.formData.disCount = JSON.stringify(val)
      }
    },
    mounted () {
      this.getCarList()
      GX.getJson('/backend/regions', {}, (res) => {
        if (res.result === 0) {
          res.content.map(val => {
            let proObj = {}
            proObj.name = val.name
            proObj.province_id = val.province_id
            this.provice.push(proObj)
          })
        }
      })
      GX.getJson('/backend/car/type', {}, (res) => {
        if (res.result === 0) {
          res.content.data.map(val => {
            this.typeList.push(val)
          })
        }
      })
    },
    methods: {
      getCarList () {
        GX.getJson('/backend/fee/types', {}, (res) => {
          if (res.result === 0) {
            this.dataTable = res.content.data
            this.pageObj.total = res.content.total
            this.pageObj.current_page = res.content.current_page
            this.pageObj.per_page = parseInt(res.content.per_page)
          } else {
            this.$Message.warning(res.message)
          }
        })
      },
      addFix () {
        GX.postJson('/backend/fee/types', this.formData, (res) => {
          if (res.result === 0) {
            this.$Message.warning('添加成功')
          } else {
            this.$Message.warning(res.message)
          }
        })
        this.showAdd = false
      }
    },
    components: {
      navBar
    }
  }
</script>

<style>
  .pageBox {
    margin-top: 20px;
    float: right;
    margin-right: 20px;
  }
  .clear {
    clear: both;
  }
</style>
