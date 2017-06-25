<template>
  <div>
    <Form  :label-width="120">
      <Row :gutter="16">
        <Col span="8">
          <Form-item label="编号：">
            <Input placeholder="请输入编号" v-model="formData.number"></Input>
          </Form-item>
        </Col>
        <Col span="8">
          <Form-item label="网点名称">
            <Input v-model="formData.garage_id" placeholder="请输入网点名称"></Input>
          </Form-item>
        </Col>
      </Row>

      <Row :gutter="16">
        <Col span="8">
          <Form-item label="品牌" >
            <Input v-model="formData.brand" placeholder="请输入品牌"></Input>
          </Form-item>
        </Col>
        <Col span="8">
          <Form-item label="型号">
            <Select placeholder="请选择" v-model="formData.model">
              <Option v-for="item in typeList" :value="item.name" :key="item">{{item.name}}</Option>
            </Select>
          </Form-item>
        </Col>
        <Col span="8">
          <Form-item label="功率" v-model="formData.power">
            <Input placeholder="请输入功率"></Input>
          </Form-item>
        </Col>
      </Row>
      <Row>
        <Col span="6">
          <Form-item label="设备串号：">
            <Input v-model="formData.equipmentNo" placeholder="请输入交强险保险公司"></Input>
          </Form-item>
        </Col>
        <Col span="6">
          <Form-item label="电桩类型">
            <Select placeholder="请选择" v-model="formData.type">
              <Option value="1">快充</Option>
              <Option value="2">慢充</Option>
            </Select>
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
        selectData: [],
        formData: {
          number: '',
          garage_id: '',
          brand: '',
          model: '',
          power: '',
          equipmentNo: '',
          type: '',
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
          this.selectData = res.content
        }
      })
    },
    methods: {
      addCar () {
        GX.postJson('/backend/chargingPiles', this.formData, (res) => {
          if (res.result === 0) {
            this.$Message.warning('添加充电桩成功成功')
            setTimeout(() => {
              window.location.href = '/charge/list'
            }, 2000)
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
