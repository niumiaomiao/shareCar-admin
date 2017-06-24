<template>
  <div>
    <nav-bar title="城市管理"></nav-bar>
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
          <Select placeholder="请选择" style="width: 120px">
            <Option value="beijing">北京市</Option>
            <Option value="shanghai">上海市</Option>
            <Option value="shenzhen">深圳市</Option>
          </Select>
        </Form-item>
        <Form-item label="城市名称">
          <Select placeholder="请选择" style="width: 120px">
            <Option value="beijing">北京市</Option>
            <Option value="shanghai">上海市</Option>
            <Option value="shenzhen">深圳市</Option>
          </Select>
        </Form-item>
        <Form-item label="县名称">
          <Select placeholder="请选择" style="width: 120px">
            <Option value="beijing">北京市</Option>
            <Option value="shanghai">上海市</Option>
            <Option value="shenzhen">深圳市</Option>
          </Select>
        </Form-item>
        <Form-item label="县名称">
          <Input v-model="name" placeholder="请输入县名称"></Input>
        </Form-item>
        <Form-item label="车型">
          <Select placeholder="请选择" style="width: 120px">
            <Option value="beijing">北京市</Option>
            <Option value="shanghai">上海市</Option>
            <Option value="shenzhen">深圳市</Option>
          </Select>
        </Form-item>
        <Form-item label="计费方式">
          <Select placeholder="请选择" style="width: 120px">
            <Option value="beijing">北京市</Option>
            <Option value="shanghai">上海市</Option>
            <Option value="shenzhen">深圳市</Option>
          </Select>
        </Form-item>
        <Form-item label="时间段">
          <Select placeholder="请选择" style="width: 120px">
            <Option value="beijing">北京市</Option>
            <Option value="shanghai">上海市</Option>
            <Option value="shenzhen">深圳市</Option>
          </Select>
        </Form-item>
        <Form-item label="每小时价格">
          <Input v-model="name" placeholder="请输入每小时价格"></Input>
        </Form-item>
        <Form-item label="每公里价格">
          <Input v-model="name" placeholder="请输入每公里价格"></Input>
        </Form-item>
        <Form-item label="晚上包车">
          <Input v-model="name" placeholder="请输入价格"></Input>
        </Form-item>
        <Form-item label="全天用车">
          <Input v-model="name" placeholder="请输入价格"></Input>
        </Form-item>
        <Form-item label="打包价">
          2-3天<Input v-model="name" placeholder="请输入价格"></Input><br/>
          4-5天<Input v-model="name" placeholder="请输入价格"></Input><br/>
          6-7天<Input v-model="name" placeholder="请输入价格"></Input>
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
        showAdd: false
      }
    },
    mounted () {
      this.getCarList()
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
            this.$Message.warning(res.content.message)
          }
        })
      },
      addFix () {
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
