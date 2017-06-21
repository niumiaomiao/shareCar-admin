<template>
  <Row>
    <Col span="24">
      <Menu :theme="theme2" :open-names="['1']" accordion>
        <Submenu name="1">
          <template slot="title">
              <Icon type="ios-paper"></Icon>
              车辆管理
          </template>
          <Menu-item name="1-1">城市管理</Menu-item>
          <Menu-item name="1-2">车型管理</Menu-item>
          <Menu-item name="1-3">定价管理</Menu-item>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
              <Icon type="ios-people"></Icon>
              车辆信息管理
          </template>
          <Menu-item name="2-1">地图显示</Menu-item>
          <Menu-item name="2-2">车辆记录</Menu-item>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              统计分析
          </template>
          <Menu-group title="使用">
              <Menu-item name="3-1">新增和启动</Menu-item>
              <Menu-item name="3-2">活跃分析</Menu-item>
              <Menu-item name="3-3">时段分析</Menu-item>
          </Menu-group>
          <Menu-group title="留存">
              <Menu-item name="3-4">用户留存</Menu-item>
              <Menu-item name="3-5">流失用户</Menu-item>
          </Menu-group>
        </Submenu>
      </Menu>
    </Col>
  </Row>
</template>
<script>
  export default {
    data () {
      return {
        theme2: 'light'
      }
    }
  }
</script>
