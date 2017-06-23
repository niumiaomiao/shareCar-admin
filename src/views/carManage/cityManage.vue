<template>
  <Table stripe :columns="columns1" :data="dataTable"></Table>
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
            title: '城市',
            key: 'city'
          },
          {
            title: '县',
            key: 'county'
          },
          {
            title: '县以下区域',
            key: 'region'
          },
          {
            title: '操作人',
            key: 'operator'
          },
          {
            title: '操作日期',
            key: 'operat_time'
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
        dataTable: []
      }
    },
    mounted () {
      this.getCityList()
    },
    methods: {
      getCityList () {
        let param = {
          param: {},
          api: '/backend/city/list'
        }
        Axios.get(param).then(res => {
          if (res.data.result === 0) {
            this.dataTable = res.data.content.data
          }
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
</script>
