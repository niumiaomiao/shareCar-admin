<template>
  <Table stripe :columns="columns1" :data="data1"></Table>
</template>

<script>
  export default {
    data () {
      return {
        columns1: [
          {
            title: '订单号',
            key: 'name'
          },
          {
            title: '车牌号',
            key: 'age'
          },
          {
            title: '车型',
            key: 'address'
          },
          {
            title: '违章地点',
            key: 'addr'
          }
        ],
        data1: [
          {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          }
        ]
      }
    }
  }
</script>
