<template>
  <div>
    <Form :label-width="80" v-show="!showMap">
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
        <Col span="5">
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
          <Form-item label="网点付款方式" :label-width="90">
            <Select v-model="formData.pay_type" placeholder="请选择">
              <Option value="年付">年付</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="营业时间">
            <Time-picker format="HH:mm" type="timerange" placement="bottom-end" placeholder="选择时间" @on-change="handleChange">
            </Time-picker>
          </Form-item>
        </Col>
        <Col span="5">
          <Form-item label="网点租金">
            <Input v-model="formData.rent" placeholder="请输入租金（元）"></Input>
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
          <Form-item label="合作结束日期" :label-width="90">
            <Date-picker v-model="formData.cooperation_end_date" type="date" placeholder="选择日期"></Date-picker>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="联系人">
            <Input v-model="formData.linkman" placeholder="请输入网点联系人"></Input>
          </Form-item>
        </Col>
        <Col span="5">
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
        <Col span="10">
          <Form-item label="还车范围">
            <Button type="ghost" icon="ios-location" @click="showMap=true">坐标点</Button>
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span="23">
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
    <div v-show="showMap" >
      <div>
          <input id="keyword" type="textbox" value="酒店">
          <input type="button" value="搜索" onclick="searchKeyword()">
      </div>
      <div id="container" style="width: 90%; height: 400px">

      </div>
    </div>
  </div>
</template>

<script>
  import GX from '../../utils/gx.js'
  export default {
    data () {
      return {
        showMap: false,
        position: '',
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
      this.$nextTick(() => {
        let init = () => {
          let map = new qq.maps.Map(document.getElementById('container'), {
            center: new qq.maps.LatLng(39.916527, 116.397128),
            zoom: 10
          })
        }

        init()
      })
    },
    methods: {
      addCar () {
        if (this.formData.cooperation_end_date) {
          this.formData.cooperation_end_date = GX.formatDate(this.formData.cooperation_end_date, 'yyyy-MM-dd')
        }
        GX.postJson('/backend/garages', this.formData, (res) => {
          if (res.result === 0) {
            this.$Message.success('添加网点成功')
            this.$route.push({ path: '/net/list' })
          } else {
            this.$Message.warning(res.message)
          }
        })
      },
      handleChange (time) {
        let Stime = time.join('-')
        this.formData.opening_time = Stime
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
