<template>
  <div>
    <nav-bar title="城市管理"></nav-bar>
    <Form :label-width="80">
      <Row :gutter="16">
        <Col span="8">
          <Form-item label="车型选择">
            <Select placeholder="请选择" style="width: 120px" v-model="formData.name">
              <Option value="beijing">北京市</Option>
              <Option value="shanghai">上海市</Option>
              <Option value="shenzhen">深圳市</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="4" offset="4">
          <Button type="info" @click.native="getCityList">查询</Button>
          <Button type="success" @click.native="clearForm">清空</Button>
        </Col>
        <Col span="4" offset="3">
          <Button type="warning" @click.native="showAdd = true">新增</Button>
          <Button type="warning">导出</Button>
        </Col>
      </Row>
    </Form>
    <Table stripe :columns="columns1" :data="dataTable"></Table>
    <Page class-name="pageBox" :total="pageObj.total" @on-change="nextPage" show-elevator></Page>
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
            key: 'county',
            sortable: true
          },
          {
            title: '县以下区域',
            key: 'region',
            sortable: true
          },
          {
            title: '操作人',
            key: 'operator',
            sortable: true
          },
          {
            title: '操作日期',
            key: 'operat_time',
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
          name: '',
          limit: 20,
          page: 1
        }
      }
    },
    mounted () {
      this.getCityList()
    },
    methods: {
      getCityList () {
        GX.getJson('/backend/cities', this.formData, (res) => {
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
      clearForm () {
        this.formData.name = ''
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
