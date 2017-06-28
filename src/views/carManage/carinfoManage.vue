<template>
  <div>
    <nav-bar title="车辆信息管理"></nav-bar>
    <Form :label-width="80">
      <Row :gutter="16">
        <Col span="6">
          <Form-item label="车牌号">
            <Input placeholder="请输入" v-model="formData.plate_num"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="在线状态">
            <Select placeholder="请选择" v-model="formData.online_state">
              <Option value="0">离线</Option>
              <Option value="1">在线</Option>
              <Option value="2">未上线</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="城市">
            <Cascader :data="cityObj" change-on-select @on-change="handleChange"></Cascader>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="使用状态">
            <Select placeholder="请选择" v-model="formData.use_state_id">
              <Option v-for="item in orderStatus" :value="item.id" :key="item">{{item.name}}</Option>
            </Select>
          </Form-item>
        </Col>
        
        </Row>
        <Row>

        <Col span="5" offset="10">
        <Form-item>
          <Button type="info" @click.native="getCarList">查询</Button>
          <Button type="success" @click.native="clearForm">清空</Button>
          </Form-item>
        </Col>
        <Col span="5">
        <Form-item>
          <Button type="warning" @click.native="showAdd = true">新增</Button>
          <Button type="warning">导出</Button>
          </Form-item>
        </Col>
      </Row>
    </Form>
    <Table stripe :columns="columns1" :data="dataTable" ></Table>
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
            key: '',
            sortable: true
          },
          {
            title: '序号',
            key: 'id',
            sortable: true
          },
          {
            title: '车牌号',
            key: 'plate_num',
            sortable: true
          },
          {
            title: '车型',
            key: 'car_type',
            sortable: true
          },
          {
            title: '城市',
            key: 'city',
            sortable: true
          },
          {
            title: '车辆状态',
            key: 'car_state',
            sortable: true
          },
          {
            title: '在线状态',
            key: 'online_state',
            sortable: true
          },
          {
            title: '使用状态',
            key: 'use_state',
            sortable: true
          },
          {
            title: '电量',
            key: 'electricity',
            sortable: true
          },
          {
            title: '剩余续航里程(KM)',
            key: 'left_mileage',
            sortable: true
          },
          {
            title: '终端状态',
            key: 'terminal_state',
            sortable: true
          },
          {
            title: '操作',
            key: 'action',
            fixed: 'right',
            width: 200,
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
                      let lineStates = ''
                      if (params.row.online_state === '0') {
                        lineStates = '1'
                      } else {
                        lineStates = '0'
                      }
                      GX.postJson('/backend/cars/online', {car_id: params.row.id, online_state: lineStates}, (res) => {
                        if (res.result === 0) {
                          setTimeout(() => {
                            window.location.reload()
                          }, 2000)
                        }
                      })
                    }
                  }
                }, '上下线'),
                h('Button', {
                  props: {
                    type: 'warning',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      GX.postJson('/backend/cars/delete', {car_id: params.row.id}, (res) => {
                        if (res.result === 0) {
                          setTimeout(() => {
                            window.location.reload()
                          }, 2000)
                        }
                      })
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        dataTable: [],
        pageObj: {
          total: 1
        },
        formData: {
          limit: 20,
          page: 1,
          city_id: '',
          online_state: '',
          plate_num: '',
          use_state_id: ''
        },
        cityObj: [],
        orderStatus: []
      }
    },
    mounted () {
      this.getCarList()
      GX.getJson('/backend/regions/transform', {}, (res) => {
        if (res.result === 0) {
          this.cityObj = res.content
        }
      })
      GX.getJson('/backend//order/states', {}, (res) => {
        if (res.result === 0) {
          this.orderStatus = res.content
        }
      })
    },
    methods: {
      getCarList () {
        GX.getJson('/backend/cars', this.formData, (res) => {
          if (res.result === 0) {
            this.dataTable = res.content.data
            this.dataTable.map(val => {
              switch (val.use_state_id) {
                case '0':
                  val.use_state_id = '闲置中'
                  break
                case '1':
                  val.use_state_id = '使用中'
                  break
                case '2':
                  val.use_state_id = '充电中'
                  break
                case '3':
                  val.use_state_id = '调度中'
                  break
                case '4':
                  val.use_state_id = '下线'
                  break
                case '6':
                  val.use_state_id = '维修中'
                  break
                case '7':
                  val.use_state_id = '保险中'
                  break
                default:
                  val.use_state_id = '-'
              }
              switch (val.online_state) {
                case '0':
                  val.online_state = '离线'
                  break
                case '1':
                  val.online_state = '在线'
                  break
                case '2':
                  val.online_state = '未上线'
                  break
                default:
                  val.online_state = '-'
              }
              switch (val.car_state) {
                case '1':
                  val.car_state = '已熄火'
                  break
                case '2':
                  val.car_state = '已启动'
                  break
                default:
                  val.car_state = '-'
              }
              switch (val.terminal_state) {
                case 1:
                  val.terminal_state = '离线'
                  break
                case 2:
                  val.terminal_state = '在线'
                  break
                default:
                  val.terminal_state = '-'
              }
            })
            this.pageObj.total = res.content.total
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
        this.formData.city_id = selectedData.pop().value
      },
      show () {
        console.log('fsdf')
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
