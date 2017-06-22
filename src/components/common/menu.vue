<template>
  <Row>
    <Col span="24">
      <Menu :theme="theme2" :open-names="['1']" accordion>
        <Submenu name="1">
          <template slot="title">
              <Icon type="ios-paper"></Icon>
              车辆管理
          </template>
          <Menu-item name="1-1"><router-link to="/city/manage">城市管理</router-link></Menu-item>
          <Menu-item name="1-2"><router-link to="/cartype/manage">车型管理</router-link></Menu-item>
          <Menu-item name="1-3"><router-link to="/fixprice/manage">定价管理</router-link></Menu-item>
        </Submenu>

        <Submenu name="2">
          <template slot="title">
              <Icon type="ios-people"></Icon>
              车辆信息管理
          </template>
          <Menu-item name="2-1">地图显示</Menu-item>
          <Menu-item name="2-2">车辆详情</Menu-item>
          <Menu-item name="2-3">车辆记录</Menu-item>
        </Submenu>

        <Submenu name="3">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              充电管理
          </template>
          <Menu-item name="3-1">充电列表</Menu-item>
          <Menu-item name="3-2">充电详情</Menu-item>
        </Submenu>

        <Submenu name="4">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              维保管理
          </template>
          <Menu-item name="4-1">维保列表</Menu-item>
          <Menu-item name="4-2">保养详情</Menu-item>
          <Menu-item name="4-3">维修详情</Menu-item>
          <Menu-item name="4-4">保险详情</Menu-item>
          <Menu-item name="4-5">清洗详情</Menu-item>
        </Submenu>

        <Submenu name="4">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              违章管理
          </template>
          <Menu-item name="4-1">违章列表</Menu-item>
          <Menu-item name="4-2">新增违章</Menu-item>
          <Menu-item name="4-3">保养详情</Menu-item>
          <Menu-item name="4-4">维修详情</Menu-item>
          <Menu-item name="4-5">保险详情</Menu-item>
        </Submenu>

        <Submenu name="5">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              调度管理
          </template>
          <Menu-item name="5-1">调度管理列表</Menu-item>
        </Submenu>

        <Submenu name="6">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              监控管理
          </template>
          <Menu-item name="6-1">车辆运行轨迹</Menu-item>
          <Menu-item name="6-1">网点监控</Menu-item>
        </Submenu>

        <Submenu name="7">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              故障申报管理
          </template>
          <Menu-item name="6-1">管理列表</Menu-item>
        </Submenu>

        <Submenu name="7">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              订单管理
          </template>
          <Menu-item name="7-1">订单列表</Menu-item>
          <Menu-item name="7-2">订单详情</Menu-item>
        </Submenu>

        <Submenu name="8">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              硬件管理
          </template>
          <Menu-item name="8-1">设备管理</Menu-item>
          <Menu-item name="8-2">SIM管理</Menu-item>
        </Submenu>
      </Menu>
    </Col>
  </Row>
</template>
<script>
  export default {
    data () {
      return {
        theme2: 'dark'
      }
    }
  }
</script>

<style>
  .ivu-menu-vertical .ivu-menu-item {
    padding: 0px;
  }
  .ivu-menu-item a {
    display: block;
    padding: 14px 24px;
    color: #495060;
  }

  .ivu-menu-item a:hover {
    color: #fff;
  }
  .ivu-menu-item-active a, .ivu-menu-item-selected a {
    color: #fff;
  }
</style>
