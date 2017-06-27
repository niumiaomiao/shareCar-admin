<template>
  <div>
    <nav-bar title="网点列表"></nav-bar>
    <Form :label-width="80">
      <Row :gutter="16">
        <Col span="4">
          <Form-item label="城市">
            <Input placeholder="请输入" v-model="formData.city"></Input>
          </Form-item>
        </Col>
        <Col span="4">
          <Form-item label="网点名称">
            <Input placeholder="请输入网点名称" v-model="formData.name"></Input>
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
        <Col span="3" offset="3">
          <Button type="info" @click.native="getCarList">查询</Button>
          <Button type="success">清空</Button>
        </Col>
        <Col span="3" offset="1">
          <Button type="warning"><router-link to="/add/net">新增</router-link></Button>
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
            sortable: true
          },
          {
            title: '操作',
            key: 'action',
            fixed: 'right',
            render (h, params) {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      console.log('点击')
                    }
                  }
                }, '查看'),
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
