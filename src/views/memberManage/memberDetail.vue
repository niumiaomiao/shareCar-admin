<template>
  <div>
    <Row :gutter="16">
      <Col span="24" class="first-title">车辆信息</Col><br/> 
      <Col span="24" class="small-title">基本信息</Col><br/>
      <Col span="6">
          <div>头像：</div>
      </Col>
      <Col span="6">
          <div>性别：男</div>
      </Col>
      <Col span="6">
          <div>电话：</div>
      </Col>
      <Col span="6">
          <div>出生年月：</div>
      </Col>
    </Row><br/>
    <Row :gutter="16">
      <Col span="6">
          <div>注册时间：</div>
      </Col>
      <Col span="6">
          <div>用户状态：</div>
      </Col>
      <Col span="6">
          <div>绑定微信号：</div>
      </Col>
      <Col span="6">
          <div>押金状态</div>
      </Col>
    </Row><br/>
    <Row :gutter="16">
      <Col span="6">
          <div>余额：</div>
      </Col>
      <Col span="6">
          <div>押金：</div>
      </Col>
      <Col span="6">
          <div>订单数：</div>
      </Col>
      <Col span="6">
          <div>信用值</div>
      </Col>
    </Row><br/>
    <Row>
      <Col span="6">违章记录：</Col>
    </Row><br/>
    <Row>
      <Col span="24" class="small-title">认证信息</Col><br/>
      <Col span="6">
          <div>认证状态：</div>
      </Col>
      <Col span="6">
          <div>认证姓名：</div>
      </Col>
      <Col span="6">
          <div>身份证号：</div>
      </Col>
      <Col span="6">
          <div>身份证有效期：</div>
      </Col>
    </Row><br/>
    <Row>
      <Col span="6">
          <div>驾驶证有效期：</div>
      </Col>
      <Col span="6">
          <div>驾驶证类型：</div>
      </Col>
    </Row><br/>
    <Row>
      <Col span="24">认证图片：</Col>
    </Row><br/>
    <Row>
      <Col span="24">审核备注：</Col>
    </Row>
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
        GX.getJson('/backend/user/verify_info', {user_id: this.userId}, (res) => {
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
