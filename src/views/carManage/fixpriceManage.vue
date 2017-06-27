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
          total: 1
        },
        formData: {
          limit: 10,
          page: 1
        }
      }
    },
    mounted () {
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
