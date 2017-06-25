<template>
  <div>
    <Row :gutter="16">
      <Col span="24" class="first-title">车辆保养详情</Col><br/> 
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
      <Col span="24" class="small-title">保养详情</Col><br/>
    </Row>
    <Row>
      <Table stripe :columns="columns1" :data="dataTable"></Table>
    </Row>
  </div>
</template>

<script>
  import GX from '../../utils/gx.js'
  export default {
    data () {
      return {
        columns1: [
          {
            title: '日期',
            key: 'id',
            width: 120,
            align: 'center'
          },
          {
            title: '保养地点',
            key: 'phone',
            width: 140,
            align: 'center'
          },
          {
            title: '保养费用',
            key: 'username',
            width: 120,
            align: 'center'
          },
          {
            title: '保养时间',
            key: 'verify_state',
            width: 120,
            align: 'center'
          },
          {
            title: '相关证明图片',
            key: 'user_state',
            width: 150,
            align: 'center'
          },
          {
            title: '备注信息',
            key: 'orders_count',
            width: 150,
            align: 'center'
          },
          {
            title: '负责人',
            key: 'credit_score',
            width: 120,
            align: 'center'
          }
        ],
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
