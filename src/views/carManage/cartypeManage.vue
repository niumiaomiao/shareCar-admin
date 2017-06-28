<template>
  <div>
    <nav-bar title="车辆类型列表"></nav-bar>
    <Form :label-width="80">
      <Row :gutter="16">
        <Col span="8">
          <Form-item label="车型选择">
            <Select placeholder="请选择" style="width: 120px" v-model="formData.keyword">
              <Option v-for="item in carType" :value="item.name" :key="item">{{item.name}}</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="4" offset="4">
          <Button type="info" @click.native="getCarList">查询</Button>
          <Button type="success">清空</Button>
        </Col>
        <Col span="4" offset="3">
          <Button type="warning" @click.native="showAdd = true">新增</Button>
          <Button type="warning">导出</Button>
        </Col>
      </Row>
    </Form>
    <Modal v-model="showAdd" title="新增车型" @on-ok="addType">
      <Form :label-width="80" :rules="ruleValidate">
        <Form-item label="输入框">
          <Input v-model="name" placeholder="请输入"></Input>
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
            title: '车型',
            key: 'name',
            sortable: true
          },
          {
            title: '操作人',
            key: 'comment',
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
                      // this.editType(params.index)
                    }
                  }
                }, '编辑'),
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
        ruleValidate: {
          name: [
            { required: true, message: '类型不能为空', trigger: 'blur' }
          ]
        },
        dataTable: [],
        pageObj: {
          total: 1
        },
        formData: {
          keyword: '',
          limit: 20,
          page: 1
        },
        showAdd: false,
        editName: '',
        name: '',
        carType: []
      }
    },
    mounted () {
      // 车型
      GX.getJson('/backend/car/type', {}, (res) => {
        if (res.result === 0) {
          res.content.data.map(val => {
            this.carType.push(val)
          })
        }
      })
      this.getCarList()
    },
    methods: {
      getCarList () {
        GX.getJson('/backend/car/type', this.formData, (res) => {
          if (res.result === 0) {
            this.dataTable = res.content.data
            this.pageObj.total = res.content.total
          } else {
            this.$Message.warning(res.content.message)
          }
        })
      },
      addType () {
        GX.postJson('/backend/car/type', {name: this.name}, (res) => {
          if (res.result === 0) {
            this.$Message.success('添加成功！')
            this.showAdd = false
            this.getCarList()
          }
        })
      },
      editType (index) {
        this.$Modal.info({
          title: '用户信息',
          content: `姓名：7878`
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
