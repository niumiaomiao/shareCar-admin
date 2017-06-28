<template>
  <div>
    <nav-bar title="定价管理"></nav-bar>
    <Form :label-width="80">
      <Row :gutter="16">
        <Col span="4">
          <Form-item label="城市">
            <Cascader :data="cityObj" :value="formData.city_id" change-on-select @on-change="handleChange"></Cascader>
          </Form-item>
        </Col>
        <Col span="4">
          <Form-item label="车型">
            <Select placeholder="请选择" v-model="formData.car_type">
              <Option v-for="item in typeList" :value="item.name">{{item.name}}</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="2" offset="4">
          <Button type="info" @click.native="getCarList">查询</Button>
          <Button type="success" @click.native="clearForm">清空</Button>
        </Col>
        <Col span="4" >
          <Button type="warning"><router-link to="/add/fixprice">新增</router-link></Button>
          <Button type="warning">导出</Button>
        </Col>
      </Row>
    </Form>
    <Table stripe :columns="columns1" :data="dataTable"></Table>
    <Page class-name="pageBox" :total="pageObj.total" @on-change="nextPage" show-elevator></Page>
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
            key: 'id',
            sortable: true
          },
          {
            title: '城市',
            key: 'city',
            sortable: true
          },
          {
            title: '县',
            key: 'area',
            sortable: true
          },
          {
            title: '车型',
            key: 'car_type',
            sortable: true
          },
          {
            title: '时间段',
            key: 'priceContent',
            sortable: true
          },
          {
            title: '计价类型',
            key: 'fee_type',
            sortable: true
          },
          {
            title: '操作时间',
            key: 'updated_at',
            sortable: true
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
          total: 1
        },
        formData: {
          limit: 10,
          page: 1,
          car_type: '',
          city_id: ''
        },
        typeList: [],
        cityObj: []
      }
    },
    mounted () {
      // 车型
      GX.getJson('/backend/car/type', {}, (res) => {
        if (res.result === 0) {
          res.content.data.map(val => {
            this.typeList.push(val)
          })
        }
      })
      // 城市
      GX.getJson('/backend/regions/transform', {}, (res) => {
        if (res.result === 0) {
          this.cityObj = res.content
        }
      })
      this.getCarList()
    },
    methods: {
      getCarList () {
        GX.getJson('/backend/fee/types', this.formData, (res) => {
          if (res.result === 0) {
            this.dataTable = res.content.data
            this.pageObj.total = res.content.total
          } else {
            this.$Message.warning(res.message)
          }
        })
      },
      nextPage (page) {
        this.formData.page = page
        this.getCarList()
      },
      handleChange (value, selectedData) {
        this.formData.city_id = selectedData.pop().value
      },
      clearForm () {
        this.formData.car_type = ''
        this.formData.city_id = ''
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
