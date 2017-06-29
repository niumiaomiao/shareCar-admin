<template>
  <div>
    <nav-bar title="网点列表"></nav-bar>
    <Form :label-width="70">
      <Row :gutter="16">
        <Col span="5">
          <Form-item label="城市" :label-width="50">
            <Input placeholder="请输入" v-model="formData.city"></Input>
          </Form-item>
        </Col>
        <Col span="5">
          <Form-item label="网点名称">
            <Input placeholder="请输入网点名称" v-model="formData.name"></Input>
          </Form-item>
        </Col>
        <Col span="5">
          <Form-item label="状态" :label-width="50">
            <Select placeholder="请选择" style="width: 120px" v-model="formData.state">
              <Option value="1">启用</Option>
              <Option value="2">停用</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="4" offset="1">
          <Button type="info" @click.native="getCarList">查询</Button>
          <Button type="success">清空</Button>
        </Col>
        <Col span="4">
          <Button type="warning"><router-link to="/add/net">新增</router-link></Button>
          <Button type="warning">导出</Button>
        </Col>
      </Row>
    </Form>
    <Table stripe :columns="columns1" :data="dataTable"></Table>
    <Page class-name="pageBox" :total="pageObj.total" :page-size="formData.limit" @on-change="nextPage" show-elevator></Page>
    <div class="clear"></div>
  </div>
</template>
<script type="text/x-template" id="action-template">
  <div>
    <a href="/"><Icon type="eye" size="22" style="margin-right: 5px"></Icon></a>
  </div>
</script>
<script>
  import GX from '../../utils/gx.js'
  import navBar from '../../components/common/navBar'

  export default {
    data () {
      return {
        columns1: [
          {
            title: '提醒',
            key: 'car_state',
            sortable: true
          },
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
            title: '网点名称',
            key: 'name',
            sortable: true
          },
          {
            title: '详细地址',
            key: 'city',
            sortable: true
          },
          {
            title: '车位数',
            key: 'car_state',
            sortable: true
          },
          {
            title: '电桩数',
            key: 'address',
            sortable: true
          },
          {
            title: '类型',
            key: 'type',
            sortable: true
          },
          {
            title: '状态',
            key: 'state',
            sortable: true,
            render (h, params) {
              return h('span', params.row.state === '1' ? '启用' : '停用')
            }
          },
          {
            title: '操作',
            key: 'action',
            fixed: 'right',
            render (h, params) {
              return h('div', [
                h('a', {
                  attrs: {
                    class: 'ivu-icon ivu-icon-eye',
                    href: '/add/net',
                    title: '详情'
                  },
                  style: {
                    marginRight: '5px',
                    fontSize: '22px',
                    color: '#666',
                    cursor: 'pointer'
                  }
                }, ''),
                h('a', {
                  attrs: {
                    class: 'ivu-icon ivu-icon-edit',
                    href: `/add/net?id=${params.row.id}`,
                    title: '编辑'
                  },
                  style: {
                    marginRight: '5px',
                    fontSize: '20px',
                    color: '#666',
                    cursor: 'pointer'
                  }
                }, ''),
                h('i', {
                  attrs: {
                    class: params.row.state === '1' ? 'ivu-icon ivu-icon-arrow-down-a' : 'ivu-icon ivu-icon-arrow-up-a',
                    title: params.row.state === '1' ? '停用' : '启用'
                  },
                  style: {
                    fontSize: '22px',
                    cursor: 'pointer'
                  },
                  on: {
                    click: () => {
                      console.log('点击')
                    }
                  }
                }, '')
              ])
            }
          }
        ],
        dataTable: [],
        pageObj: {
          total: 1
        },
        formData: {
          city: '',
          name: '',
          state: '',
          page: 1,
          limit: 20
        }
      }
    },
    mounted () {
      this.getCarList()
    },
    methods: {
      getCarList () {
        GX.getJson('/backend/garages', this.formData, (res) => {
          if (res.result === 0) {
            this.dataTable = res.content.data
            this.pageObj.total = res.content.total
          } else {
            this.$Message.warning(res.content.message)
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
