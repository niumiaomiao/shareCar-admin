<template>
  <div>
    <nav-bar title="车辆信息管理"></nav-bar>
    <Table stripe :columns="columns1" :data="dataTable"></Table>
    <Page class-name="pageBox" :total="pageObj.total" :current="pageObj.current_page" :page-size="pageObj.per_page" show-elevator></Page>
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
            key: 'car_state'
          },
          {
            title: '序号',
            key: 'id'
          },
          {
            title: '车牌号',
            key: 'plate_num'
          },
          {
            title: '车型',
            key: 'car_type'
          },
          {
            title: '城市',
            key: 'city'
          },
          {
            title: '车辆状态',
            key: 'car_state'
          },
          {
            title: '在线状态',
            key: 'online_state'
          },
          {
            title: '使用状态',
            key: 'use_state'
          },
          {
            title: '电量',
            key: 'electricity'
          },
          {
            title: '剩余续航里程(KM)',
            key: 'left_mileage'
          },
          {
            title: '终端状态',
            key: 'terminal_state'
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
        GX.getJson('/backend/cars', {}, (res) => {
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
