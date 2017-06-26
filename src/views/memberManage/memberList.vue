<template>
  <div>
    <Form  :label-width="80">
      <Row :gutter="16">
        <Col span="6">
          <Form-item label="姓名">
            <Input placeholder="请输入"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="手机号">
            <Input placeholder="请输入"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="认证状态">
            <Select placeholder="请选择">
              <Option value="3">北京市</Option>
              <Option value="4">上海市</Option>
              <Option value="7">深圳市</Option>
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
            <Select placeholder="请选择">
              <Option value="1">北京市</Option>
              <Option value="2">上海市</Option>
              <Option value="3">深圳市</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="用户状态">
            <Select placeholder="请选择">
              <Option value="4">北京市</Option>
              <Option value="5">上海市</Option>
              <Option value="6">深圳市</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="注册时间">
            <Date-picker type="date" placeholder="选择日期"></Date-picker>
          </Form-item>
        </Col>
        <Col span="6">
            <div>
              <Button type="info">信息按钮</Button>
              <Button type="success">成功按钮</Button>
            </div>
        </Col>
      </Row>
    </Form>
    <Table stripe :columns="columns1" :data="dataTable"></Table>
    <Page class-name="pageBox" :total="pageObj.total" :current="pageObj.current_page" :page-size="pageObj.per_page" show-elevator></Page>
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
            key: 'id'
          },
          {
            title: '序号',
            key: 'id'
          },
          {
            title: '性别',
            key: 'sex'
          },
          {
            title: '出生年月',
            key: 'birthday'
          },
          {
            title: '手机号',
            key: 'phone'
          },
          {
            title: '认证状态',
            key: 'deposit_state'
          },
          {
            title: '认证姓名',
            key: 'username'
          },
          {
            title: '押金状态',
            key: 'verify_state'
          },
          {
            title: '用户状态',
            key: 'user_state'
          },
          {
            title: '订单数',
            key: 'orders_count'
          },
          {
            title: '信用值',
            key: 'credit_score'
          },
          {
            title: '注册时间',
            key: 'reg_date'
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
                      window.location.href = 'member/check' + params.row.id
                    }
                  }
                }, '审核')
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
      this.getCarList()
    },
    methods: {
      getCarList () {
        GX.getJson('/backend/users', {}, (res) => {
          if (res.result === 0) {
            this.dataTable = res.content.data
            this.pageObj.total = res.content.total
            this.pageObj.current_page = res.content.current_page
            this.pageObj.per_page = res.content.per_page
          } else {
            this.$Message.warning(res.content.message)
          }
        })
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
