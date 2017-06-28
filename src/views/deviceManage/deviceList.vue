<template>
  <div>
    <nav-bar title="设备管理"></nav-bar>
    <Form :label-width="80">
      <Row :gutter="16">
        <Col span="8">
          <Form-item label="序列号">
            <Input v-model="formData.sn" placeholder="请输入序列号"></Input>
          </Form-item>
        </Col>
        <Col span="8">
          <Form-item label="车辆牌号">
            <Input v-model="formData.plate" placeholder="请输入车辆牌号"></Input>
          </Form-item>
        </Col>
        <Col span="8">
          <Form-item label="厂商">
            <Input v-model="formData.factory" placeholder="请输入厂商"></Input>
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span="8">
          <Form-item label="使用状态">
            <Select placeholder="请选择" v-model="formData.state">
              <Option value="0">停用</Option>
              <Option value="1">启用</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="4" offset="4">
          <Button type="info">查询</Button>
          <Button type="success">清空</Button>
        </Col>
        <Col span="4" offset="3">
          <Button type="warning" @click.native="showAdd = true">新增</Button>
          <Button type="warning">导出</Button>
        </Col>
      </Row>
    </Form>
    <Modal v-model="showAdd" title="添加车管员" @on-ok="addDeviceList">
      <Form :label-width="120">
        <Form-item label="汽车ID">
            <Input v-model="newData.car_id" placeholder="请输入汽车ID"></Input>
        </Form-item>
        <Form-item label="obd设备序列号">
            <Input v-model="newData.obd_sn" placeholder="请输入obd设备序列号"></Input>
        </Form-item>
        <Form-item label="操作人">
            <Input v-model="newData.operator_id" placeholder="请输入操作人"></Input>
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
            title: '序列号',
            key: 'sn',
            sortable: true
          },
          {
            title: '厂商',
            key: 'factory',
            sortable: true
          },
          {
            title: '车牌号',
            key: 'plate',
            sortable: true
          },
          {
            title: '绑定时间',
            key: 'created_at',
            sortable: true
          },
          {
            title: '使用状态',
            key: 'state',
            sortable: true
          },
          {
            title: '处理人',
            key: 'operator',
            sortable: true
          },
          {
            title: '处理时间',
            key: 'operated_at',
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
                      console.log('fsd')
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
        dataTable: [],
        pageObj: {
          total: 1
        },
        showAdd: false,
        formData: {
          factory: '',
          plate: '',
          sn: '',
          state: '',
          limit: 20,
          page: 1
        },
        newData: {
          car_id: '',
          obd_sn: '',
          operator_id: ''
        }
      }
    },
    mounted () {
      this.getDeviceList()
    },
    methods: {
      getDeviceList () {
        GX.getJson('/backend/devices', this.formData, (res) => {
          if (res.result === 0) {
            this.dataTable = res.content.data
          } else {
            this.$Message.warning(res.content.message)
          }
        })
      },
      addDeviceList () {
        GX.postJson('/backend/device/bind', this.newData, (res) => {
          if (res.result === 0) {
            this.showAdd = false
            this.$Message.warning('设备绑定成功')
            setTimeout(() => {
              this.getDeviceList()
            }, 1000)
          } else {
            this.$Message.warning(res.message)
          }
        })
      },
      nextPage (page) {
        this.formData.page = page
        this.getDeviceList()
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
