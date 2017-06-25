<template>
  <div>
    <Row :gutter="16">
      <Col span="24" class="first-title">车辆保险详情</Col><br/> 
      <Col span="24" class="small-title">车辆基本信息</Col><br/>
      <Col span="6">
          <div>车牌号：{{dataObj.sex}}</div>
      </Col>
      <Col span="6">
          <div>车型：{{dataObj.sex}}</div>
      </Col>
      <Col span="6">
          <div>车架号：{{dataObj.phone}}</div>
      </Col>
      <Col span="6">
          <div>发动机号：{{dataObj.birthday}}</div>
      </Col>
    </Row><br/>
    <Row :gutter="16">
      <Col span="6">
          <div>座位数：{{dataObj.reg_time}}</div>
      </Col>
      <Col span="6">
          <div>城市：{{dataObj.user_state}}</div>
      </Col>
      <Col span="6">
          <div>颜色：{{dataObj.weixin}}</div>
      </Col>
      <Col span="6">
          <div>检验有效期: {{dataObj.deposit_state}}</div>
      </Col>
    </Row><br/>
    <Row :gutter="16">
      <Col span="6">
          <div>交强险保险公司：{{dataObj.money}}</div>
      </Col>
      <Col span="6">
          <div>交强保单号：{{dataObj.deposit}}</div>
      </Col>
      <Col span="6">
          <div>投保日期：{{dataObj.order_count}}</div>
      </Col>
      <Col span="6">
          <div>有效保险期：{{dataObj.credit_score}}</div>
      </Col>
    </Row><br/>
    <Row>
      <Col span="6">商业险保险公司：{{dataObj.peccancy_count}}</Col>
      <Col span="6">商业保单号：{{dataObj.peccancy_count}}</Col>
      <Col span="6">
          <div>投保日期：{{dataObj.verify_state}}</div>
      </Col>
      <Col span="6">
          <div>有效保险期：{{dataObj.username}}</div>
      </Col>
    </Row><br/>
    <Row>
      <Col span="6">
          <div>发动机状态：{{dataObj.driver_license_expire}}</div>
      </Col>
      <Col span="6">
          <div>车门状态：{{dataObj.driver_license_type}}</div>
      </Col>
      <Col span="6">灯光：{{dataObj.verify_remark}}</Col>
    </Row><br/>
    <Row>
      <Col span="24" class="small-title">保险详情</Col><br/>
      <Col span="6">
          <div>关联订单号：{{dataObj.verify_state}}</div>
      </Col>
      <Col span="6">
          <div>案件所属城市：{{dataObj.username}}</div>
      </Col>
      <Col span="6">
          <div>承租人：{{dataObj.id_card}}</div>
      </Col>
      <Col span="6">
          <div>承租人电话：{{dataObj.id_card_expire}}</div>
      </Col>
    </Row><br/>
    <Row>
      <Col span="6">
          <div>报案人：{{dataObj.driver_license_expire}}</div>
      </Col>
      <Col span="6">
          <div>报案电话：{{dataObj.driver_license_type}}</div>
      </Col>
      <Col span="6">
          <div>联系电话：{{dataObj.driver_license_expire}}</div>
      </Col>
      <Col span="6">
          <div>报案号：{{dataObj.driver_license_type}}</div>
      </Col>
    </Row><br/>
    <Row>
      <Col span="24">报案时间：{{dataObj.verify_remark}}</Col>
    </Row><br/>
    <Row>
      <Col span="6">
          <div>驾驶员：{{dataObj.driver_license_expire}}</div>
      </Col>
      <Col span="6">
          <div>出险时间：{{dataObj.driver_license_type}}</div>
      </Col>
      <Col span="6">
          <div>出险地点：{{dataObj.driver_license_expire}}</div>
      </Col>
      <Col span="6">
          <div>事故责任：{{dataObj.driver_license_type}}</div>
      </Col>
    </Row><br/>
    <Row>
      <Col span="6">
          <div>我方定损金额：{{dataObj.driver_license_expire}}</div>
      </Col>
      <Col span="6">
          <div>三者金额：{{dataObj.driver_license_type}}</div>
      </Col>
    </Row><br/>
    <Row>
      <Col span="24">证明图片：{{dataObj.verify_remark}}</Col>
    </Row><br/>
    <Row>
      <Col span="24">事故经历：{{dataObj.verify_remark}}</Col>
    </Row><br/>
    <Row>
      <Col span="24">备注信息：{{dataObj.verify_remark}}</Col>
    </Row><br/>
  </div>
</template>

<script>
  import GX from '../../utils/gx.js'
  export default {
    data () {
      return {
        userId: 'DE018640-DCEE-C7B3-453F-CFE484DBFDF8',
        dataObj: {}
      }
    },
    mounted () {
      this.getmemberDetail()
    },
    methods: {
      getmemberDetail () {
        GX.postJson('/backend/user/detail', {user_id: this.userId}, (res) => {
          if (res.result === 0) {
            this.dataObj = res.content
          } else {
            this.$Message.warning(res.content.message)
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
