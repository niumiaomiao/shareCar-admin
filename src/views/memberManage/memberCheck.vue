<template>
  <Form :label-width="120">
    <Row :gutter="16">
      <Col span="24" class="first-title">认证审核</Col><br/>
      <Col span="24">
        <Form-item label="认证姓名">
          <Input placeholder="请输入认证姓名" v-model="dataObj.username"></Input>
        </Form-item>
      </Col>
      <Col span="24">
        <Form-item label="身份证号：">
          <Input placeholder="请输入身份证号" v-model="dataObj.id_card"></Input>
        </Form-item>
      </Col>
      <Col span="24">
        <Form-item label="身份证有效期：">
          <Input placeholder="请输入身份证有效期" v-model="dataObj.id_card_expiry_date"></Input>
        </Form-item>
      </Col>
      <Col span="24">
        <Form-item label="驾驶证有效期：">
          <Input placeholder="请输入驾驶证有效期" v-model="dataObj.driver_license_expiry_date"></Input>
        </Form-item>
      </Col>
      <Col span="24">
        <Form-item label="驾驶证类型：">
          <Select placeholder="请选择" v-model="dataObj.driver_license_type">
            <Option value="1">C1</Option>
            <Option value="2">C2</Option>
          </Select>
        </Form-item>
      </Col>
      <Col span="24">
        <Form-item label="生日：">
          <Input placeholder="请输入生日" v-model="dataObj.birthday"></Input>
        </Form-item>
      </Col>
      <Col span="24">
        <Form-item label="认证图片">
          <img :src="dataObj.id_card_url"><br/><br/>
          <img :src="dataObj.driving_licence_url">
        </Form-item>
      </Col>
      <Col span="24">
        <Form-item label="审核">
          <Radio-group v-model="verify_state">
            <Radio label="1">通过</Radio>
            <Radio label="2">拒绝</Radio>
          </Radio-group>
        </Form-item>
      </Col>
      <Col span="18">
        <Form-item label="拒绝原因">
          <Select placeholder="请选择" v-model="reject_reason">
            <Option value="1">上传图片不清晰</Option>
            <Option value="2">身份证与驾驶证不一致</Option>
            <Option value="3">身份证无效</Option>
            <Option value="4">驾驶证无效</Option>
            <Option value="5">填写信息与上传图片信息不一致</Option>
          </Select>
        </Form-item>
      </Col>
      <Col span="18">
        <Form-item label="审核备注">
          <Input type="textarea" v-model="verify_remark" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
        </Form-item>
      </Col>
      <Col span="10" :offset="3">
        <Form-item>
          <Button type="primary" @click.native="submit">提交</Button>
          <Button type="ghost" style="margin-left: 8px">取消</Button>
        </Form-item>
      </Col>
    </Row>
  </Form>
</template>

<script>
  import GX from '../../utils/gx.js'
  export default {
    data () {
      return {
        userId: '',
        verify_remark: '',
        verify_state: '',
        reject_reason: '',
        // 信息查询
        dataObj: {}
      }
    },
    mounted () {
      this.userId = window.location.href.split('/').pop()
      this.getmemberDetail()
    },
    methods: {
      getmemberDetail () {
        GX.postJson('/backend/user/verify_info', {user_id: this.userId}, (res) => {
          if (res.result === 0) {
            this.dataObj = res.content
          } else {
            this.$Message.warning(res.message)
          }
        })
      },
      submit () {
        this.dataObj.userId = this.userId
        this.dataObj.verify_remark = this.verify_remark
        this.dataObj.verify_state = this.verify_state
        this.dataObj.reject_reason = this.reject_reason
        delete this.dataObj.driving_licence_url
        delete this.dataObj.id_card_url
        delete this.dataObj.id
        GX.postJson('/backend/user/verified', this.dataObj, (res) => {
          if (res.result === 0) {
            this.$Message.success(res.message)
          } else {
            this.$Message.warning(res.message)
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
