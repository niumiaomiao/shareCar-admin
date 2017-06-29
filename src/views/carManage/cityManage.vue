<template>
  <div>
    <nav-bar title="城市管理"></nav-bar>
    <Form :label-width="80">
      <Row :gutter="16">
        <Col span="6">
          <Form-item label="城市">
            <Cascader :data="cityObj" change-on-select @on-change="handleChange"></Cascader>
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
    <Modal v-model="showAdd" title="新增车型" @on-ok="addCity">
      <Form :label-width="80" >
       <!--  <Form-item label="城市">
          <Input v-model="name" placeholder="请输入"></Input>
        </Form-item> -->
        <Form-item label="城市">
          <Cascader :data="cityObj" change-on-select @on-change="handleChangeAdd"></Cascader>
        </Form-item>
        <Form-item label="县以下区域">
          <Input v-model="addData.region" placeholder="请输入"></Input>
        </Form-item>
      </Form>
    </Modal>
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
            key: 'operate_time',
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
                    type: 'edit',
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
          city_id: '',
          limit: 20,
          page: 1
        },
        addData: {
          city_id: '',
          region: ''
        },
        cityObj: [],
        showAdd: false
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
        GX.getJson('/backend/cities', this.formData, (res) => {
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
      addCity () {
        if (this.addData.city_id === '') {
          this.$Message.warning('请选择城市')
          return
        }
        console.log(this.addData)
      },
      clearForm () {
        this.formData.city_id = ''
      },
      nextPage (page) {
        this.formData.page = page
        this.getCarList()
      },
      handleChange (value, selectedData) {
        this.formData.city_id = selectedData.pop().value
      },
      handleChangeAdd (value, selectedData) {
        this.addData.city_id = selectedData.pop().value
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
