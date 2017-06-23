<template>
  <div>
    <Table stripe :columns="columns1" :data="dataTable"></Table>
    <Page class-name="pageBox" :total="pageObj.total" :current="pageObj.current_page" :page-size="pageObj.per_page" show-elevator></Page>
    <div class="clear"></div>
  </div>
</template>

<script>
  import AXIOS from '../../axios/axios.js'
  const Axios = new AXIOS()
  export default {
    data () {
      return {
        columns1: [
          {
            title: '序号',
            key: 'id'
          },
          {
            title: '车型',
            key: 'name'
          },
          {
            title: '操作人',
            key: 'comment'
          },
          {
            title: '操作日期',
            key: 'updated_at'
          },
          {
            title: '操作',
            key: 'action',
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
        let param = {
          param: {},
          api: '/backend/car/type'
        }
        Axios.get(param).then(res => {
          if (res.data.result === 0) {
            this.dataTable = res.data.content.data
            this.pageObj.total = res.data.content.total
            this.pageObj.current_page = res.data.content.current_page
            this.pageObj.per_page = res.data.content.per_page
          } else {
            this.$Message.warning(res.data.content.message)
          }
        }).catch(err => {
          console.log(err)
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
