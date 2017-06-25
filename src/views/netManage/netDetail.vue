<template>
  <div>
    <Row :gutter="16">
      <Col span="24" class="first-title">网点详情</Col><br/>
      <Col span="6">
          <div>网点名称：</div>
      </Col>
      <Col span="6">
          <div>城市：</div>
      </Col>
      <Col span="6">
          <div>详细地址：</div>
      </Col>
      <Col span="6">
          <div>车位数：</div>
      </Col>
    </Row><br/>
    <Row :gutter="16">
      <Col span="6">
          <div>电桩数：</div>
      </Col>
      <Col span="6">
          <div>营业时间：</div>
      </Col>
      <Col span="6">
          <div>网点租金：</div>
      </Col>
      <Col span="6">
          <div>网点电费：</div>
      </Col>
    </Row><br/>
    <Row :gutter="16">
      <Col span="6">
          <div>类型：{{dataObj.money}}</div>
      </Col>
      <Col span="6">
          <div>合作结束日期：{{dataObj.deposit}}</div>
      </Col>
      <Col span="6">
          <div>网点付款方式：{{dataObj.order_count}}</div>
      </Col>
      <Col span="6">
          <div>联系人：</div>
      </Col>
    </Row><br/>
    <Row>
      <Col span="6">联系电话：{{dataObj.peccancy_count}}</Col>
    </Row><br/>
    <Row>
      <Col span="6">
          <div>状态：{{dataObj.verify_state}}</div>
      </Col>
      <Col span="6">
          <div>启用/停用时间：{{dataObj.username}}</div>
      </Col>
      <Col span="6">
          <div>操作人：{{dataObj.id_card}}</div>
      </Col>
      <Col span="6">
         
      </Col>
    </Row><br/>
    <Row>
      <Col span="24">网点照片<img :src="item"></Col>
    </Row>
    <Row>
      <Col span="24">还车范围<img :src="item"></Col>
    </Row>
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
