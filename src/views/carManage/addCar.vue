<template>
  <div>
    <Form  :label-width="120">
      <Row :gutter="16">
        <Col span="6">
          <Form-item label="车牌号">
            <Input placeholder="请输入车牌号" v-model="formData.plate"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="车型">
            <Select placeholder="请选择" v-model="formData.typeID" v-if="typeList">
              <Option v-for="item in typeList" :value="item.name" :key="item">{{item.name}}</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="车架号">
            <Input v-model="formData.vinNo" placeholder="请输入车牌号"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="发动机号">
            <Input v-model="formData.engineNo" placeholder="请输入发动机号"></Input>
          </Form-item>
        </Col>
      </Row>

      <Row :gutter="16">
        <Col span="6">
          <Form-item label="座位数">
            <Input placeholder="请输入座位数" v-model="formData.seatCount"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="城市">
            <Select placeholder="请选择" v-model="formData.cityId">
              <Option value="3">北京市</Option>
              <Option value="4">上海市</Option>
              <Option value="7">深圳市</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="颜色">
            <Input placeholder="请输入颜色" v-model="formData.color"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="检验有效期">
            <Date-picker v-model="formData.check_expire_date" type="date" placeholder="选择日期"></Date-picker>
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span="6">
          <Form-item label="交强险保险公司">
            <Input v-model="formData.TCICompany" placeholder="请输入交强险保险公司"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="交强保单号">
            <Input v-model="formData.TCIBillNo" placeholder="请输入交强保单号"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="投保日期">
            <Date-picker v-model="formData.TCIStartDate" type="date" placeholder="选择日期"></Date-picker>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="有效保险期">
            <Date-picker v-model="formData.TCIEndDate" type="date" placeholder="选择日期"></Date-picker>
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span="6">
          <Form-item label="商业险保险公司">
            <Input v-model="formData.VCICompany" placeholder="请输入商业险保险公司"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="商业险保单号">
            <Input v-model="formData.VCIBillNo" placeholder="请输入商业险保单号"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="投保日期">
            <Date-picker v-model="formData.VCIStartDate" type="date" placeholder="选择日期"></Date-picker>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="有效保险期">
            <Date-picker v-model="formData.VCIEndDate" type="date" placeholder="选择日期"></Date-picker>
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span="24" class="small-title">相关照片:</Col>
        <Col span="10">
          <Form-item label="车辆照片">
            <Upload
            multiple
            type="drag"
            :format="['jpg','jpeg','png']"
            :max-size="2048"
            action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
              <p>点击上传车辆照片</p>
            </div>
          </Upload>
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span="10">
          <Form-item label="车辆证件照片">
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
      </Row>
      <Row>
        <Col span="20">
          <Form-item label="备注信息">
            <Input v-model="formData.remark" type="textarea" :autosize="{minRows: 3,maxRows: 8}" placeholder="请输入备注信息"></Input>
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span="6" offset="15">
          <Form-item>
            <Button type="primary" @click.native="addCar">提交</Button>
            <Button type="ghost" style="margin-left: 8px">取消</Button>
          </Form-item>
        </Col>
      </Row>
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
        if (this.formData.check_expire_date) {
          this.formData.check_expire_date = GX.formatDate(this.formData.check_expire_date, 'yyyy-MM-dd')
        }
        if (this.formData.TCIStartDate) {
          this.formData.TCIStartDate = GX.formatDate(this.formData.TCIStartDate, 'yyyy-MM-dd')
        }
        if (this.formData.TCIEndDate) {
          this.formData.TCIEndDate = GX.formatDate(this.formData.TCIEndDate, 'yyyy-MM-dd')
        }
        if (this.formData.VCIStartDate) {
          this.formData.VCIStartDate = GX.formatDate(this.formData.VCIStartDate, 'yyyy-MM-dd')
        }
        if (this.formData.VCIEndDate) {
          this.formData.VCIEndDate = GX.formatDate(this.formData.VCIEndDate, 'yyyy-MM-dd')
        }
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
