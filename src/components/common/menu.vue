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
          <Menu-item name="2-4"><router-link to="/carinfo/manage">车辆信息列表</router-link></Menu-item>
          <Menu-item name="2-5"><router-link to="/add/car">新增车辆</router-link></Menu-item>
          <Menu-item name="2-1"><router-link to="/">地图显示</router-link></Menu-item>
          <Menu-item name="2-2"><router-link to="/">车辆详情</router-link></Menu-item>
          <Menu-item name="2-3"><router-link to="/">车辆记录</router-link></Menu-item>
        </Submenu>

        <Submenu name="10">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              会员信息管理
          </template>
          <Menu-item name="10-3"><router-link to="/member/list">会员列表</router-link></Menu-item>
        </Submenu>

        <Submenu name="16">
          <template slot="title">
            <Icon type="stats-bars"></Icon>
              网点管理
          </template>
          <Menu-item name="16-1"><router-link to="/net/list">网点列表</router-link></Menu-item>
          <Menu-item name="16-2"><router-link to="/">网点详情</router-link></Menu-item>
        </Submenu>

        <Submenu name="9">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              充电桩管理
          </template>
          <Menu-item name="9-6"><router-link to="/charge/list">充电桩管理</router-link></Menu-item>
          <Menu-item name="9-7"><router-link to="/add/charge">新增充电桩</router-link></Menu-item>
        </Submenu>

        <Submenu name="7">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              订单管理
          </template>
          <Menu-item name="7-1"><router-link to="/order/list">订单列表</router-link></Menu-item>
          <Menu-item name="7-2"><router-link to="/order/detail">订单详情</router-link></Menu-item>
        </Submenu>

        <Submenu name="3">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              充电管理
          </template>
          <Menu-item name="3-1"><router-link to="/">充电列表</router-link></Menu-item>
          <Menu-item name="3-2"><router-link to="/">充电详情</router-link></Menu-item>
          <Menu-item name="3-2"><router-link to="/">还车范围规范</router-link></Menu-item>
        </Submenu>

        <Submenu name="4">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              维保管理
          </template>
          <Menu-item name="4-1"><router-link to="/maintenance/list">维保列表</router-link></Menu-item>
          <Menu-item name="4-2"><router-link to="/maintain/detail">保养详情</router-link></Menu-item>
          <Menu-item name="4-3"><router-link to="/repair/detail">维修详情</router-link></Menu-item>
          <Menu-item name="4-4"><router-link to="/insurance/detail">保险详情</router-link></Menu-item>
          <Menu-item name="4-5"><router-link to="/rinse/detail">清洗详情</router-link></Menu-item>
        </Submenu>

        <Submenu name="4">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              违章管理
          </template>
          <Menu-item name="4-1"><router-link to="/illegal/list">违章列表</router-link></Menu-item>
          <Menu-item name="4-2"><router-link to="/illegal/detail">违章详情</router-link></Menu-item>
          <Menu-item name="4-3"><router-link to="/illegal/add">新增违章</router-link></Menu-item>
        </Submenu>

        <Submenu name="5">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              调度管理
          </template>
          <Menu-item name="5-1"><router-link to="/">调度管理列表</router-link></Menu-item>
        </Submenu>

        <Submenu name="6">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              监控管理
          </template>
          <Menu-item name="6-1"><router-link to="/">车辆运行轨迹</router-link></Menu-item>
          <Menu-item name="6-1"><router-link to="/">网点监控</router-link></Menu-item>
        </Submenu>

        <Submenu name="7">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              故障申报管理
          </template>
          <Menu-item name="6-1"><router-link to="/">管理列表</router-link></Menu-item>
        </Submenu>

        <Submenu name="8">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              硬件管理
          </template>
          <Menu-item name="8-1"><router-link to="/">设备管理</router-link></Menu-item>
          <Menu-item name="8-2"><router-link to="/">SIM管理</router-link></Menu-item>
        </Submenu>

        <Submenu name="11">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              商户信息
          </template>
          <Menu-item name="11-1"><router-link to="/">商户返点</router-link></Menu-item>
          <Menu-item name="11-2"><router-link to="/">返点详情</router-link></Menu-item>
        </Submenu>

        <Submenu name="12">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              车管员管理
          </template>
          <Menu-item name="12-1"><router-link to="/">车管员管理</router-link></Menu-item>
        </Submenu>

        <Submenu name="13">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              短信管理
          </template>
          <Menu-item name="13-1"><router-link to="/">短信管理</router-link></Menu-item>
        </Submenu>

        <Submenu name="14">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              数据分析
          </template>
          <Menu-item name="14-1"><router-link to="/">车辆数据分析</router-link></Menu-item>
          <Menu-item name="14-2"><router-link to="/">地域数据分析</router-link></Menu-item>
          <Menu-item name="14-3"><router-link to="/">统计</router-link></Menu-item>
        </Submenu>

        <Submenu name="15">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              财务管理
          </template>
          <Menu-item name="15-1"><router-link to="/">押金管理</router-link></Menu-item>
          <Menu-item name="15-2"><router-link to="/">押金退款管理</router-link></Menu-item>
          <Menu-item name="15-3"><router-link to="/">退款详情</router-link></Menu-item>
          <Menu-item name="15-4"><router-link to="/">用费费用管理</router-link></Menu-item>
          <Menu-item name="15-5"><router-link to="/">发票管理</router-link></Menu-item>
          <Menu-item name="15-6"><router-link to="/">发票详情</router-link></Menu-item>
        </Submenu>

        <Submenu name="15">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              权利管理
          </template>
          <Menu-item name="15-1"><router-link to="/">角色管理</router-link></Menu-item>
          <Menu-item name="15-2"><router-link to="/">新建角色及角色权限</router-link></Menu-item>
          <Menu-item name="15-3"><router-link to="/">成员管</router-link>理</Menu-item>
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
</style>
