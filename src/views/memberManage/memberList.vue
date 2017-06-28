<template>
  <div>
    <Form  :label-width="80">
      <Row :gutter="16">
        <Col span="6">
          <Form-item label="姓名">
            <Input placeholder="请输入" v-model="formData.name"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="手机号">
            <Input placeholder="请输入" v-model="formData.phone"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="认证状态">
            <Select placeholder="请选择" v-model="formData.verify_state">
              <Option value="1">未认证</Option>
              <Option value="2">已认证</Option>
              <Option value="3">未通过</Option>
              <Option value="4">已过期</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="6">
            <div></div>
        </Col>
      </Row>
      <Row :gutter="16">
        <Col span="6">
          <Form-item label="押金状态">
            <Select placeholder="请选择" v-model="formData.deposit_state">
              <Option value="1">未支付</Option>
              <Option value="2">已支付</Option>
              <Option value="3">未退款</Option>
              <Option value="4">已退款</Option>
            </Select>
          </Form-item>
        </Col>
        <!-- <Col span="6">
          <Form-item label="用户状态">
            <Select placeholder="请选择">
              <Option value="4">北京市</Option>
              <Option value="5">上海市</Option>
              <Option value="6">深圳市</Option>
            </Select>
          </Form-item>
        </Col> -->
        <Col span="6">
          <Form-item label="注册时间">
            <Date-picker v-model="formData.reg_date" type="date" placeholder="选择日期"></Date-picker>
          </Form-item>
        </Col>
        <Col span="6">
            <div>
              <Button type="info">清空</Button>
              <Button type="success" @click.native="getCarList">搜索</Button>
            </div>
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
  export default {
    data () {
      return {
        columns1: [
          {
            title: '提醒',
            key: 'id',
            sortable: true
          },
          {
            title: '序号',
            key: 'id',
            sortable: true
          },
          {
            title: '性别',
            key: 'sex',
            sortable: true
          },
          {
            title: '出生年月',
            key: 'birthday',
            sortable: true
          },
          {
            title: '手机号',
            key: 'phone',
            sortable: true
          },
          {
            title: '认证状态',
            key: 'deposit_state',
            sortable: true
          },
          {
            title: '认证姓名',
            key: 'username',
            sortable: true
          },
          {
            title: '押金状态',
            key: 'verify_state',
            sortable: true
          },
          {
            title: '用户状态',
            key: 'user_state',
            sortable: true
          },
          {
            title: '订单数',
            key: 'orders_count',
            sortable: true
          },
          {
            title: '信用值',
            key: 'credit_score',
            sortable: true
          },
          {
            title: '注册时间',
            key: 'reg_date',
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
                      window.location.href = '/member/detail/' + params.row.id
                    }
                  }
                }, '详情'),
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      window.location.href = '/member/check/' + params.row.id
                    }
                  }
                }, '审核')
              ])
            }
          }
        ],
        dataTable: [],
        pageObj: {
          total: 1
        },
        formData: {
          deposit_state: '',
          limit: 20,
          name: '',
          page: 1,
          phone: '',
          reg_date: '',
          verify_state: ''
        }
      }
    },
    mounted () {
      this.getCarList()
    },
    methods: {
      getCarList () {
        GX.getJson('/backend/users', this.formData, (res) => {
          if (res.result === 0) {
            this.dataTable = res.content.data
            this.pageObj.total = res.content.total
            this.pageObj.current_page = res.content.current_page
            this.pageObj.per_page = res.content.per_page
          } else {
            this.$Message.warning(res.content.message)
          }
        })
      },
      nextPage (page) {
        this.formData.page = page
        this.getCarList()
      }
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
