<template>
  <Form label-width="120">
    <Row :gutter="16">
      <Col span="24" class="first-title">认证审核</Col><br/>
      <Col span="24">
        <Form-item label="认证姓名：">
          需要
        </Form-item>
      </Col>
      <Col span="24">
        <Form-item label="身份证号：">
          需要
        </Form-item>
      </Col>
      <Col span="24">
        <Form-item label="身份证有效期：">
          需要
        </Form-item>
      </Col>
      <Col span="24">
        <Form-item label="驾驶证有效期：">
          需要
        </Form-item>
      </Col>
      <Col span="24">
        <Form-item label="驾驶证类型：">
          需要
        </Form-item>
      </Col>
      <Col span="24">
        <Form-item label="生日：">
          需要
        </Form-item>
      </Col>
      <Col span="24">
        <Form-item label="认证图片">
          需要
        </Form-item>
      </Col>
      <Col span="24">
        <Form-item label="审核">
          <Radio-group>
            <Radio label="male">通过</Radio>
            <Radio label="female">不通过</Radio>
          </Radio-group>
        </Form-item>
      </Col>
      <Col span="18">
        <Form-item label="拒绝原因">
          <Select placeholder="请选择">
            <Option value="beijing">北京市</Option>
            <Option value="shanghai">上海市</Option>
            <Option value="shenzhen">深圳市</Option>
          </Select>
        </Form-item>
      </Col>
      <Col span="18">
        <Form-item label="拒绝原因">
          <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
        </Form-item>
      </Col>
      <Col span="10" :offset="3">
        <Form-item>
          <Button type="primary">提交</Button>
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
        userId: 'DE018640-DCEE-C7B3-453F-CFE484DBFDF8',
        dataObj: {}
      }
    },
    mounted () {
      this.getmemberDetail()
    },
    methods: {
      getmemberDetail () {
        GX.getJson('/backend/user/verify_info', {user_id: this.userId}, (res) => {
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
