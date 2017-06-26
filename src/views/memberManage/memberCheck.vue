<template>
  <Form :label-width="120">
    <Row :gutter="16">
      <Col span="24" class="first-title">认证审核</Col><br/>
      <Col span="24">
        <Form-item label="认证姓名：">
          {{dataObj.username}}
        </Form-item>
      </Col>
      <Col span="24">
        <Form-item label="身份证号：">
          {{dataObj.id_card}}
        </Form-item>
      </Col>
      <Col span="24">
        <Form-item label="身份证有效期：">
          {{dataObj.id_card_expiry}}
        </Form-item>
      </Col>
      <Col span="24">
        <Form-item label="驾驶证有效期：">
          {{dataObj.driver_license_expiry}}
        </Form-item>
      </Col>
      <Col span="24">
        <Form-item label="驾驶证类型：">
          {{dataObj.driver_license_type}}
        </Form-item>
      </Col>
      <Col span="24">
        <Form-item label="生日：">
          {{dataObj.birthday}}
        </Form-item>
      </Col>
      <Col span="24">
        <Form-item label="认证图片">
          需要
        </Form-item>
      </Col>
      <Col span="24">
        <Form-item label="审核">
          <Radio-group v-model="dataObj.verify_state">
            <Radio label="1">通过</Radio>
            <Radio label="2">拒绝</Radio>
          </Radio-group>
        </Form-item>
      </Col>
      <Col span="18" v-if="dataObj.reject_reason">
        <Form-item label="拒绝原因">
          <Select placeholder="请选择">
            <Option value="上传图片不清晰">上传图片不清晰</Option>
            <Option value="身份证与驾驶证不一致">身份证与驾驶证不一致</Option>
            <Option value="身份证无效">身份证无效</Option>
            <Option value="驾驶证无效">驾驶证无效</Option>
            <Option value="填写信息与上传图片信息不一致">填写信息与上传图片信息不一致</Option>
          </Select>
        </Form-item>
      </Col>
      <Col span="18">
        <Form-item label="审核备注">
          <Input type="textarea" v-model="dataObj.verify_remark" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
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
        // 信息查询
        dataObj: {}
      }
    },
    mounted () {
      this.userId = window.location.href.split('/').pop()
      this.dataObj.verify_state = 1
      this.dataObj.reject_reason = ''
      this.dataObj.verify_remark = ''
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
