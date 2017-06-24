<template>
  <div>
    <Form  :label-width="120">
            <Row :gutter="16">
        <Col span="6">
          <Form-item label="订单号">
            <Input placeholder="请输入订单号" v-model="formData.plate"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="车牌号">
            <Input placeholder="车牌号" v-model="formData.plate"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="车型" v-model="formData.vinNo">
            <Input placeholder="请输入车型"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="违章地点" v-model="formData.engineNo">
            <Input placeholder="违章地点"></Input>
          </Form-item>
        </Col>
      </Row>

      <Row :gutter="16">
        <Col span="6">
          <Form-item label="违章类型" v-model="formData.seatCount">
            <Input placeholder="请输入违章类型"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="违章时间">
            <Date-picker v-model="formData.check_expire_date" type="date" placeholder="选择日期"></Date-picker>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="罚款金额" v-model="formData.color">
            <Input placeholder="请输入罚款金额"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="扣分" v-model="formData.color">
            <Input placeholder="请输入扣分"></Input>
          </Form-item>
        </Col>
      </Row>

      <Row :gutter="16">
        <Col span="6">
          <Form-item label="处理状态">
            <Select placeholder="请选择" v-model="formData.cityId">
              <Option value="3">未处理</Option>
              <Option value="4">处理中</Option>
              <Option value="7">已处理</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="用车类型">
            <Select placeholder="请选择" v-model="formData.cityId">
              <Option value="3">订单用车</Option>
              <Option value="4">高度用车</Option>
            </Select>          
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="用车人" v-model="formData.color">
            <Input placeholder="请输入罚款金额"></Input>
          </Form-item>
        </Col>
      </Row>

      <Row :gutter="16">
        <Col span="6">
          <Form-item label="处理方式" v-model="formData.seatCount">
            <Select placeholder="请选择" v-model="formData.cityId">
              <Option value="3">自行处理</Option>
              <Option value="4">代办处理</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="代办费用">
            <Input placeholder="代办费用"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="超时费用" v-model="formData.color">
            <Input placeholder="请输入超时费用"></Input>
          </Form-item>
        </Col>
      </Row>
      <Row :gutter="16">
      <Col>
        <Form-item label="备注信息" v-model="formData.color">
        <Input v-model="value5" type="textarea" placeholder="请输入备注信息" :rows="6"></Input>
        </Form-item>
      </Col>
    </Row><br/>
    <Row :gutter="16">
      <Col span="10">
        <Form-item label="评证图片" v-model="formData.color">
          <Upload
              multiple
              type="drag"
              :format="['jpg','jpeg','png']"
              :max-size="2048"
              action="//jsonplaceholder.typicode.com/posts/">
              <div style="padding: 20px 0">
                <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
                <p>点击上传车辆证件照片</p>
              </div>
            </Upload>
        </Form-item>
      </Col>
    </Row><br/>
    </Form>
  </div>
</template>

<script>
  import GX from '../../utils/gx.js'
  export default {
    data () {
      return {
        typeList: [],
        formData: {
          plate: '',
          typeID: '',
          vinNo: '',
          engineNo: '',
          seatCount: '',
          cityId: '',
          color: '',
          check_expire_date: '',
          TCICompany: '',
          TCIBillNo: '',
          TCIStartDate: '',
          TCIEndDate: '',
          VCICompany: '',
          VCIBillNo: '',
          VCIStartDate: '',
          VCIEndDate: '',
          remark: ''
        }
      }
    },
    mounted () {
      GX.getJson('/backend/car/type', {}, (res) => {
        if (res.result === 0) {
          res.content.data.map(val => {
            this.typeList.push(val)
          })
        }
      })
      // 获取省市联动
      GX.getJson('/backend/regions', {}, (res) => {
        if (res.result === 0) {
          console.log('fsfs')
        }
      })
    },
    methods: {
      addCar () {
        GX.postJson('/backend/cars', this.formData, (res) => {
          if (res.result === 0) {
            this.$Message.seccess('添加车辆成功')
          } else {
            this.$Message.warning(res.message)
          }
        })
      }
    }
  }
</script>

<style>
  .pageBox {
    margin-top: 20px;
    float: right;
    margin-right: 20px;
  }
  .clear {
    clear: both;
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
