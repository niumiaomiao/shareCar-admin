<template>
  <div>
    <nav-bar title="车管员管理"></nav-bar>
    <Form :label-width="80">
      <Row :gutter="16">
        <Col span="8">
          <Form-item label="城市">
            <Cascader :data="cityObj" change-on-select @on-change="handleChange"></Cascader>
          </Form-item>
        </Col>
        <Col span="8">
          <Form-item label="姓名">
              <Input v-model="formData.username" placeholder="请输入"></Input>
          </Form-item>
        </Col>
        <Col span="8">
          <Form-item label="手机号">
              <Input v-model="formData.phone" placeholder="请输入"></Input>
          </Form-item>
        </Col>
        </Row>
        <Row>
        <Col span="5" :offset="10">
          <Form-item>
            <Button type="info" @click.native="getCarList">查询</Button>
            <Button type="success" @click.native="clearForm">清空</Button>
          </Form-item>
        </Col>
        <Col span="8">
        <Form-item>
          <Button type="warning" @click.native="showAdd = true">新增</Button>
          <Button type="warning">导出</Button>
          </Form-item>
        </Col>
      </Row>
    </Form>
    <Modal v-model="showAdd" title="添加车管员" @on-ok="addAdmin">
      <Form :label-width="80">
        <Form-item label="姓名">
            <Input v-model="formItem.username" placeholder="请输入"></Input>
        </Form-item>
        <Form-item label="手机号">
            <Input v-model="formItem.phone" placeholder="请输入"></Input>
        </Form-item>
        <Form-item label="密码">
            <Input v-model="formItem.password" placeholder="请输入"></Input>
        </Form-item>
        <Form-item label="重复密码">
            <Input v-model="formItem.password_confirmation" placeholder="请输入"></Input>
        </Form-item>
      </Form>
    </Modal>
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
            key: 'userID',
            sortable: true
          },
          {
            title: '姓名',
            key: 'username',
            sortable: true
          },
          {
            title: '手机号',
            key: 'phone',
            sortable: true
          },
          {
            title: '城市',
            key: 'city',
            sortable: true
          },
          {
            title: '创建时间',
            key: 'created_at',
            sortable: true
          }
        ],
        dataTable: [],
        pageObj: {
          total: 1
        },
        showAdd: false,
        formItem: {
          username: '',
          phone: '',
          password: '',
          password_confirmation: ''
        },
        formData: {
          limit: 20,
          page: 1,
          phone: '',
          username: '',
          city_name: ''
        },
        cityObj: []
      }
    },
    mounted () {
      this.getCarList()
      GX.getJson('/backend/regions/transform', {}, (res) => {
        if (res.result === 0) {
          this.cityObj = res.content
        }
      })
    },
    methods: {
      getCarList () {
        GX.getJson('/backend/workers', this.formData, (res) => {
          if (res.result === 0) {
            this.dataTable = res.content.data
            this.pageObj.total = res.content.total
          } else {
            this.$Message.warning(res.content.message)
          }
        })
      },
      addAdmin () {
        GX.postJson('/backend/workers', this.formItem, (res) => {
          if (res.result === 0) {
            this.showAdd = false
            this.$Message.warning('管理员添加成功')
            setTimeout(() => {
              window.location.href = '/admin/list'
            }, 2000)
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
        this.formData.city_name = selectedData.pop().label
        console.log('aa', this.formData.city_name)
      },
      clearForm () {
        this.phone = ''
        this.username = ''
        this.city_name = ''
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
