<template>
  <div>
    <Row :gutter="16">
      <Col span="24" class="first-title">车辆信息</Col><br/>
      <Col span="24" class="small-title">基本信息</Col><br/>
      <Col span="8">
          <div>认证名称：</div>
      </Col>
      <Col span="8">
          <div>手机号{{dataObj.phone}}</div>
      </Col>
    </Row><br/>
    <Row :gutter="16">
      <Col span="8">
          <div>车牌号：{{dataObj.plate}}</div>
      </Col>
      <Col span="8">
          <div>车型：{{dataObj.car_type}}</div>
      </Col>
      <Col span="8">
          <div>城市：{{dataObj.city}}</div>
      </Col>
    </Row><br/>
    <Row :gutter="16">
      <Col span="6">
          <div>订单编号：{{dataObj.orderNo}}</div>
      </Col>
      <Col span="6">
          <div>订单状态：{{dataObj.order_state}}</div>
      </Col>
      <Col span="6">
          <div>订单金额：{{dataObj.totalMoney}}</div>
      </Col>
      <Col span="6">
          <div>支付状态：{{dataObj.payment}}</div>
      </Col>
    </Row><br/>

    <Row :gutter="16">
      <!-- <Col span="6">
          <div>预计费用：{{dataObj.money}}</div>
      </Col> -->
      <!-- <Col span="6">
          <div>已支付金额：{{dataObj.deposit}}</div>
      </Col> -->
      <Col span="6">
          <div>已抵扣金额：{{dataObj.discountMoney}}</div>
      </Col>
      <!-- <Col span="6">
          <div>支付方式：{{dataObj.credit_score}}</div>
      </Col> -->
    </Row><br/>
    
    <!-- <Row>
      <Col span="6">
          <div>支付时间：{{dataObj.driver_license_expire}}</div>
      </Col>
      <Col span="6">
          <div>流水号账号：{{dataObj.driver_license_type}}</div>
      </Col>
    </Row><br/> -->

    <Row :gutter="16">
      <Col span="6">
          <div>取车网点名称：{{dataObj.start_garage}}</div>
      </Col>
      <Col span="6">
          <div>还车网点名称：{{dataObj.end_garage}}</div>
      </Col>
      <Col span="6">
          <div>预约时间：{{dataObj.bookTime}}</div>
      </Col>
      <Col span="6">
          <div>开始时间{{dataObj.startTime}}</div>
      </Col>
    </Row><br/>

    <Row :gutter="16">
      <Col span="6">
          <div>结束时间：{{dataObj.endTime}}</div>
      </Col>
      <Col span="6">
          <div>订单时长：{{dataObj.usingLength}}</div>
      </Col>
      <Col span="6">
          <div>是否违章：
          <span v-if="dataObj.violation">
            <section v-for="item in dataObj.violation">
              <p>违章时间：item.violation_at</p>
              <p>是否事故：item.is_accident</p>
              <p>事故时间：item.accident_at</p>
            </section>
          </span>
          <span v-else>否</span>
          </div>
      </Col>
    </Row><br/>

    <Row :gutter="16">
      <Col span="6">
          <div>是否事故：{{dataObj.money}}</div>
      </Col>
      <Col span="6">
          <div>事故时间：{{dataObj.deposit}}</div>
      </Col>
    </Row><br/>
  </div>
</template>

<script>
  import GX from '../../utils/gx.js'
  export default {
    data () {
      return {
        orderId: '',
        dataObj: {}
      }
    },
    mounted () {
      this.orderId = window.location.href.split('/').pop()
      this.getmemberDetail()
    },
    methods: {
      getmemberDetail () {
        GX.getJson('/backend/order/detail', {orderId: this.orderId}, (res) => {
          if (res.result === 0) {
            this.dataObj = res.content
          } else {
            this.$Message.warning(res.message)
          }
        })
      }
    }
  }
</script>

<style>
  .first-title {
    color: #5cadff;
    font-size: 16px;
    height: 45px;
    line-height: 45px;
    border-bottom: 3px solid #ebebeb;
  }
  .small-title {
    height: 40px;
    line-height: 40px;
    margin: 10px 0px;
    background-color: #f4f4f4;
    font-weight: bold;
    color: #666;
  }
</style>
