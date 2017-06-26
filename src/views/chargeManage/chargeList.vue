<template>
  <div>
    <nav-bar title="充电桩管理"></nav-bar>
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
          <Button type="warning"><router-link to="/add/charge">新增</router-link></Button>
          <Button type="warning">导出</Button>
        </Col>
      </Row>
    </Form>
    <Table stripe :columns="columns1" :data="dataTable"></Table>
    <Page class-name="pageBox" :total="pageObj.total" :current="pageObj.current_page" :page-size="pageObj.per_page" show-elevator></Page>
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
            title: '编号',
            key: 'number'
          },
          {
            title: '品牌',
            key: 'brand'
          },
          {
            title: '型号',
            key: 'model'
          },
          {
            title: '功率',
            key: 'power'
          },
          {
            title: '电桩类型',
            key: 'type'
          },
          {
            title: '城市',
            key: 'city'
          },
          {
            title: '网点名称',
            key: 'garage'
          },
          {
            title: '状态',
            key: 'status'
          },
          {
            title: '操作日期',
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
        }
      }
    },
    mounted () {
      this.getCityList()
    },
    methods: {
      getCityList () {
        GX.getJson('/backend/chargingPiles', {}, (res) => {
          if (res.result === 0) {
            this.dataTable = res.content.data
            this.pageObj.total = res.content.total
            this.pageObj.current_page = res.content.current_page
            this.pageObj.per_page = parseInt(res.content.per_page)
          } else {
            this.$Message.warning(res.content.message)
          }
        })
      }
    },
    components: {
      navBar
    }
  }
</script>
