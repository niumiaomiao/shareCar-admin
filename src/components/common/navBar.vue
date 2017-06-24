<template>
  <Row :gutter="16">
    <Col span="24" class="navBox">{{title}}</Col>
  </Row>
</template>

<script>
  export default {
    props: {
      title: String,
      crumbs: Array
    }
  }
</script>
<style>
  .navBox {
    color: #5cadff;
    font-size: 16px;
    border-bottom: 3px solid #ebebeb;
    margin-bottom: 20px;
    line-height: 20px;
  }
</style>
