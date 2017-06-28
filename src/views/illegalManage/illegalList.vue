<template>
  <div>
    <Form  :label-width="80">
      <Row :gutter="16">
        <Col span="4">
          <Form-item label="车牌号">
            <Input placeholder="请输入"></Input>
          </Form-item>
        </Col>
        <Col span="4">
          <Form-item label="单据号">
            <Input placeholder="请输入"></Input>
          </Form-item>
        </Col>
        <Col span="4">
          <Form-item label="处理状态">
            <Select placeholder="请选择">
              <Option value="0">全部</Option>
              <Option value="1">未处理</Option>
              <Option value="2">处理完</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="违章时间">
            <Date-picker type="date" placeholder="选择日期"></Date-picker>
          </Form-item>
        </Col>
        <Col span="3">
            <div>
            <Button type="info">清空</Button>
              <Button type="success" @click.native="getCarList">搜索</Button>
            </div>
        </Col>
        <Col span="3">
          <Button type="warning" @click.native="showAdd = true">新增</Button>
          <Button type="warning">导出</Button>
        </Col>
      </Row>
      <Row :gutter="16">
        <Col span="4">
          <Form-item label="省市">
            <Select placeholder="请选择">
              <Option value="1">北京市</Option>
              <Option value="2">上海市</Option>
              <Option value="3">深圳市</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="4">
          <Form-item label="用车类型">
            <Select placeholder="请选择">
              <Option value="4">北京市</Option>
              <Option value="5">上海市</Option>
              <Option value="6">深圳市</Option>
            </Select>
          </Form-item>
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
            title: '序号',
            width: 100,
            type: 'index',
            align: 'center',
            sortable: true
          },
          {
            title: '订单号',
            key: 'id',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '车牌号',
            key: 'birthday',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '车型',
            key: 'phone',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '违章地点',
            key: 'deposit_state',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '违章行为',
            key: 'username',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '违章时间',
            key: 'verify_state',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '罚款金额(元)',
            key: 'user_state',
            width: 120,
            align: 'center',
            sortable: true
          },
          {
            title: '扣分',
            key: 'orders_count',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '处理状态',
            key: 'credit_score',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '处理方式',
            key: 'reg_date',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '用车类型',
            key: 'user_state',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '用车人',
            key: 'orders_count',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '操作人',
            key: 'credit_score',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '操作时间',
            key: 'reg_date',
            width: 100,
            align: 'center',
            sortable: true
          },
          {
            title: '操作',
            key: 'action',
            width: 100,
            align: 'center',
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
                  },
                  onClick () {
                    console.log('fsdfsdf')
                  }
                }),
                h('Icon', {
                  props: {
                    type: 'edit',
                    size: '22'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  onClick () {
                    console.log('fsdfsdf')
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
