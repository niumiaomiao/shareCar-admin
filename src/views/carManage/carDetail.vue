<template>
  <div>
    <Row :gutter="16">
      <Col span="24" class="first-title">车辆信息</Col><br/> 
      <Col span="24" class="small-title">基本信息</Col><br/>
      <Col span="6">
          <div>车牌号：XXXX</div>
      </Col>
      <Col span="6">
          <div>车型：  奥迪A6</div>
      </Col>
      <Col span="6">
          <div>车架号：  Q2331998382189333</div>
      </Col>
      <Col span="6">
          <div>发动机号：  434343434</div>
      </Col>
    </Row>
  </div>
</template>

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
