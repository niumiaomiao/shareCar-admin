<template>
  <div>
    <Form  :label-width="120">
      <Row :gutter="16">
        <Col span="6">
          <Form-item label="网点名称">
            <Input v-model="formData.summary" placeholder="请输入网点名称"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="城市">
            <Input v-model="formData.area_id" placeholder="请输入城市"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="详细地址">
            <Input v-model="formData.address" placeholder="请输入详细地址"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="车位数">
            <Input v-model="formData.spaceCount" placeholder="请输入车位数"></Input>
          </Form-item>
        </Col>
      </Row>

      <Row :gutter="16">
        <Col span="6">
          <Form-item label="类型">
            <Select placeholder="请选择" v-model="formData.type">
              <Option value="1">合作</Option>
              <Option value="2">租用</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="网点付款方式">
            <Select v-model="formData.pay_type" placeholder="请选择">
              <Option value="年付">年付</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="网点租金">
            <Input v-model="formData.rent" placeholder="请输入租金（元）"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="营业时间">
            <Time-picker v-model="formData.opening_time" type="time" placeholder="选择时间" style="width: 168px"></Time-picker>
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span="6">
          <Form-item label="网点电费">
            <Input v-model="formData.electric_charge" placeholder="请输入网点电费（元/度）"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="合作结束日期">
            <Date-picker v-model="formData.cooperation_end_date" type="date" placeholder="选择日期"></Date-picker>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="联系人">
            <Input v-model="formData.linkman" placeholder="请输入网点联系人"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="联系人电话">
            <Input v-model="formData.phone" placeholder="请输入联系人电话"></Input>
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span="10">
          <Form-item label="网点照片">
            <Upload
            multiple
            type="drag"
            :format="['jpg','jpeg','png']"
            :max-size="2048"
            action="//jsonplaceholder.typicode.com/posts/">
            <div style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
              <p>点击上传网点照片</p>
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
        formData: {
          summary: '',
          area_id: '',
          address: '',
          spaceCount: '',
          type: '',
          pay_type: '',
          rent: '',
          opening_time: '',
          electric_charge: '',
          cooperation_end_date: '',
          linkman: '',
          phone: '',
          img_url: '',
          remark: ''
        }
      }
    },
    mounted () {
    },
    methods: {
      addCar () {
        if (this.formData.cooperation_end_date) {
          this.formData.cooperation_end_date = GX.formData(this.formData.cooperation_end_date, 'yyyy-MM-dd')
        }
        GX.postJson('/backend/garages', this.formData, (res) => {
          if (res.result === 0) {
            this.$Message.success('添加网点成功')
            this.$route.push({ path: '/net/list' })
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
