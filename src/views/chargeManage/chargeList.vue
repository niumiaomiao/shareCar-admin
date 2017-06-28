<template>
  <div>
    <nav-bar title="充电桩管理"></nav-bar>
    <Form :label-width="80">
      <Row :gutter="16">
        <Col span="4">
          <Form-item label="城市">
            <Cascader :data="cityObj" change-on-select @on-change="handleChange"></Cascader>
          </Form-item>
        </Col>
        <Col span="4">
          <Form-item label="网点名称">
            <Input placeholder="请输入网点名称" v-model="formData.garage_name"></Input>
          </Form-item>
        </Col>
        <Col span="4">
          <Form-item label="状态">
            <Select placeholder="请选择" style="width: 120px" v-model="formData.state">
              <Option value="1">启用</Option>
              <Option value="2">停用</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="4" offset="1">
          <Button type="info" @click.native="getCityList">查询</Button>
          <Button type="success">清空</Button>
        </Col>
        <Col span="4" offset="1">
          <Button type="warning"><router-link to="/add/charge">新增</router-link></Button>
          <Button type="warning">导出</Button>
        </Col>
      </Row>
    </Form>
    <Table stripe :columns="columns1" :data="dataTable"></Table>
    <Page class-name="pageBox" :total="pageObj.total" :page-size="formData.limit" @on-change="nextPage" show-elevator></Page>
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
            title: '编号',
            key: 'number',
            sortable: true
          },
          {
            title: '品牌',
            key: 'brand',
            sortable: true
          },
          {
            title: '型号',
            key: 'model',
            sortable: true
          },
          {
            title: '功率',
            key: 'power',
            sortable: true
          },
          {
            title: '电桩类型',
            key: 'type',
            sortable: true
          },
          {
            title: '城市',
            key: 'city',
            sortable: true
          },
          {
            title: '网点名称',
            key: 'garage',
            sortable: true
          },
          {
            title: '状态',
            key: 'status',
            sortable: true
          },
          {
            title: '操作日期',
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
          city_name: '',
          garage_name: '',
          state: '',
          limit: 20,
          page: 1
        },
        cityObj: []
      }
    },
    mounted () {
      this.getCityList()
      GX.getJson('/backend/regions/transform', {}, (res) => {
        if (res.result === 0) {
          this.cityObj = res.content
        }
      })
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
      },
      nextPage (page) {
        this.formData.page = page
        this.getCarList()
      },
      handleChange (value, selectedData) {
        this.formData.city_name = selectedData.pop().name
      }
    },
    components: {
      navBar
    }
  }
</script>
