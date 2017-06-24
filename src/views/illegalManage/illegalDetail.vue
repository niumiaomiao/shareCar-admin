<template>
  <div>
    <div span="24" class="first-title">违章信息</div><br/> 
    <Row :gutter="16">
      <Col span="6">
          <div>订单号：D324567898</div>
      </Col>
      <Col span="6">
          <div>车牌号：京43567890</div>
      </Col>
      <Col span="6">
          <div>车型：奥迪A6</div>
      </Col>
      <Col span="6">
          <div>违章地点：太阳宫</div>
      </Col>
    </Row><br/>
    <Row :gutter="16">
      <Col span="6">
          <div>违章行为：压线</div>
      </Col>
      <Col span="6">
          <div>违章时间：2017.06.27</div>
      </Col>
      <Col span="6">
          <div>罚款金额：245</div>
      </Col>
      <Col span="6">
          <div>扣分：3</div>
      </Col>
    </Row><br/>
    <Row :gutter="16">
      <Col span="6">
          <div>处理状态：未处理</div>
      </Col>
      <Col span="6">
          <div>用车类型：订单用车 </div>
      </Col>
      <Col span="6">
          <div>用车人：叮咚</div>
      </Col>
      <Col span="6">
          <div></div>
      </Col>
    </Row><br/>
    <Row :gutter="16">
      <Col span="6">
          <div>处理方式：自行处理</div>
      </Col>
      <Col span="6">
          <div>代办费用：100元</div>
      </Col>
      <Col span="6">
          <div>超时费用：50元</div>
      </Col>
      <Col span="6">
          <div></div>
      </Col>
    </Row><br/>
    <Row :gutter="16">
      <Col>
          <div>备注信息：</div>
          <div style="padding-left:50px;padding-right:50px;">
            备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息备注信息
          </div>
      </Col>
    </Row><br/>
    <Row :gutter="16">
      <Col>
          <div>评证图片：</div>
          <div style="padding-left:50px;padding-right:50px;">
            <div>
              <img src="">
            </div>
          </div>
      </Col>
    </Row><br/>
    <Row :gutter="16">
      <Col>
          <div style="float:right;padding-right:10px;">创建日期：2016.01.01</div>
      </Col>
    </Row>
    <Row :gutter="16">
      <Col>
          <div style="float:right;padding-right:10px;">更新日期：2016.01.01</div>
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
