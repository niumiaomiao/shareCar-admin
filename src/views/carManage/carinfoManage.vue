<template>
  <div>
    <nav-bar title="车辆信息管理"></nav-bar>
    <Form :label-width="80">
      <Row :gutter="16">
        <Col span="6">
          <Form-item label="车牌号">
            <Input placeholder="请输入"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="车辆状态">
            <Select placeholder="请选择">
              <Option value="1">已熄火</Option>
              <Option value="2">已启动</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="在线状态">
            <Select placeholder="请选择">
              <Option value="1">在线</Option>
              <Option value="2">离线</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="使用状态">
            <Select placeholder="请选择">
              <Option value="1">闲置中</Option>
              <Option value="2">使用中</Option>
              <Option value="2">充电中</Option>
              <Option value="2">调度中</Option>
              <Option value="2">清洗中</Option>
              <Option value="2">维修中</Option>
              <Option value="2">保养中</Option>
              <Option value="2">保险中</Option>
              <Option value="2">待修</Option>
              <Option value="2">未上线</Option>
            </Select>
          </Form-item>
        </Col>
        </Row>
        <Row>
        <Col span="6">
          <Form-item label="城市">
            <Cascader :data="cityObj" change-on-select @on-change="handleChange"></Cascader>
          </Form-item>
        </Col>
        <Col span="2" offset="8">
          <Button type="info" @click.native="getCityList">查询</Button>
          <Button type="success" @click.native="clearForm">清空</Button>
        </Col>
        <Col span="2" offset="1">
          <Button type="warning" @click.native="showAdd = true">新增</Button>
          <Button type="warning">导出</Button>
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
            key: 'car_state',
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
            sortable: true,
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'person'
                  }
                }),
                h('text', {})
              ])
            }
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
                        setTimeout(() => {
                          // window.location.reload()
                          this.getCarList()
                        }, 2000)
                      })
                    }
                  }
                }, '上下线'),
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
          limit: 20,
          page: 1
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
        GX.getJson('/backend/cars', this.formData, (res) => {
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
      },
      handleChange (value, selectedData) {
        this.formData.city_id = selectedData.pop().value
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
