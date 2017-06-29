<template>
  <div>
    <nav-bar title="定价管理"></nav-bar>
    <Row>
      <Col span="15">
        <Form :label-width="80">
          <Form-item label="所属省份">
            <Select placeholder="请选择">
              <Option v-for="item in provice" :value="item.province_id" :key="item">{{item.name}}</Option>
            </Select>
          </Form-item>
          <Form-item label="城市名称">
            <Select placeholder="请选择" v-model="formData.cityID">
              <Option value="beijing">北京市</Option>
              <Option value="shanghai">上海市</Option>
              <Option value="shenzhen">深圳市</Option>
            </Select>
          </Form-item>
          <Form-item label="县名称">
            <Select placeholder="请选择" v-model="formData.countryID">
              <Option value="beijing">北京市</Option>
              <Option value="shanghai">上海市</Option>
              <Option value="shenzhen">深圳市</Option>
            </Select>
          </Form-item>
          <!-- <Form-item label="县级以下">
            <Input v-model="name" placeholder="请输入县名称"></Input>
          </Form-item> -->
          <Form-item label="车型">
            <Select placeholder="请选择" v-model="formData.carTypeID">
              <Option v-for="item in typeList" :value="item.id" :key="item">{{item.name}}</Option>
            </Select>
          </Form-item>
          <Form-item label="计费方式">
            <section v-if="formData.feetype == ''">----</section>
            <section v-if="formData.feetype == '1'">计时</section>
            <section v-if="formData.feetype == '2'">计时＋公里</section>
          </Form-item>
          <Form-item>
            <div class="addPriBox">
              <Button type="ghost" @click.native="showModal">添加定价</Button>
            </div>
          </Form-item>
          <!-- 按公里＋小时计算价格 -->
          <table class="priceTable" v-show="fTableArray.length">
            <thead>
              <tr>
                <td>时间</td>
                <td>每小时价格（元）</td>
                <td>每公里价格（元）</td>
                <td>操作</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in fTableArray">
                <td>{{item[0]}}</td>
                <td>{{item[1]}}</td>
                <td>{{item[2]}}</td>
                <td><Icon type="close" @click.native="fTableRemove(index)"></Icon></td>
              </tr>
            </tbody>
          </table>
          <!-- 按小时计算价格 -->
          <table class="priceTable" v-show="hTableArray.length">
            <thead>
              <tr>
                <td>时间</td>
                <td>每小时价格（元）</td>
                <td>操作</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in hTableArray">
                <td>{{item[0]}}</td>
                <td>{{item[1]}}</td>
                <td>
                  <Icon type="close" @click.native="hTableRemove(index)"></Icon>
                </td>
              </tr>
            </tbody>
          </table>
          <table class="priceTable" v-show="hTableArray.length">
            <thead>
              <tr>
                <td>包夜价格</td>
                <td>全天价格</td>
                <td>2-3天价格</td>
                <td>4-5天价格</td>
                <td>6-7天价格</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{night}}</td>
                <td>{{day}}</td>
                <td>{{timeDisOne}}</td>
                <td>{{timeDisTwo}}</td>
                <td>{{timeDisThree}}</td>
              </tr>
            </tbody>
          </table>
          
          <Form-item>
            <div class="butBox">
              <Button type="primary" @click.native="addFix">提交</Button>
              <Button type="ghost" style="margin-left: 8px">取消</Button>
            </div>
          </Form-item>

          <Modal v-model="showPrice" title="添加定价" @on-ok="addPrice">
            <Form :label-width="80">
              <Form-item label="计费方式">
                <Select placeholder="请选择" v-model="formData.feetype">
                  <Option value="1">计时</Option>
                  <Option value="2">计时+公里</Option>
                </Select>
              </Form-item>
              <Form-item label="时间段">
              <!-- <Select placeholder="请选择" v-model="timeDis">
                <Option value="1">日间档</Option>
                <Option value="2">夜间档</Option>
                <Option value="3">晚上包车</Option>
                <Option value="4">全天用车</Option>
              </Select> -->
               <Time-picker format="HH:mm" type="timerange" placement="bottom-end" placeholder="选择时间" @on-change="handleChange"></Time-picker>
              </Form-item>
              <Form-item label="每小时价格">
                <Input v-model="hourPrice" placeholder="请输入每小时价格"></Input>
              </Form-item>
              <Form-item label="每公里价格" v-show="formData.feetype == '2'">
                <Input v-model="kiloPrice" placeholder="请输入每公里价格"></Input>
              </Form-item>
              <Form-item label="晚上包车">
                <Input v-model="night" placeholder="请输入价格"></Input>
              </Form-item>
              <Form-item label="全天用车">
                <Input v-model="day" placeholder="请输入价格"></Input>
              </Form-item>
              <Form-item label="打包价" v-show="formData.feetype == 1">
                2-3天<Input placeholder="请输入价格" v-model="timeDisOne"></Input><br/>
                4-5天<Input placeholder="请输入价格" v-model="timeDisTwo"></Input><br/>
                6-7天<Input placeholder="请输入价格" v-model="timeDisThree"></Input>
              </Form-item>
            </Form>
          </Modal>
        </Form>
      </Col>
    </Row>
  </div>
</template>

<script>
  import GX from '../../utils/gx.js'
  import navBar from '../../components/common/navBar'
  export default {
    data () {
      return {
        // 弹框
        showPrice: false,
        // 白天晚上
        night: '',
        day: '',
        // 省份列表
        provice: [],
        // 包车时间段
        timeDis: '',
        // 打包价格
        disCount: [],
        // 每公里价格
        kiloPrice: 0,
        // 每小时价格
        hourPrice: 0,
        timeDisOne: '',
        timeDisTwo: '',
        timeDisThree: '',
        timeOneArray: [],
        timeTwoArray: [],
        timeThreeArray: [],
        // 价格数组及对象拼装
        priceData: [],
        priceContent: {},
        formData: {
          carTypeID: '',
          cityID: '',
          countryID: '',
          feetype: '',
          disCount: '',
          priceContent: ''
        },
        // 车型
        typeList: [],
        // 表格显示
        hTableArray: [],
        fTableArray: []
      }
    },
    watch: {
      timeDisOne (val) {
        if (val) {
          this.timeOneArray = []
          this.timeOneArray.push('2-3', val)
        } else {
          this.timeOneArray = []
        }
      },
      timeDisTwo (val) {
        if (val) {
          this.timeTwoArray = []
          this.timeTwoArray.push('4-5', val)
        } else {
          this.timeTwoArray = []
        }
      },
      timeDisThree (val) {
        if (val) {
          this.timeThreeArray = []
          this.timeThreeArray.push('6-7', val)
        } else {
          this.timeThreeArray = []
        }
      }
    },
    mounted () {
      GX.getJson('/backend/regions', {}, (res) => {
        if (res.result === 0) {
          res.content.map(val => {
            let proObj = {}
            proObj.name = val.name
            proObj.province_id = val.province_id
            this.provice.push(proObj)
          })
        }
      })
      GX.getJson('/backend/car/type', {}, (res) => {
        if (res.result === 0) {
          res.content.data.map(val => {
            this.typeList.push(val)
          })
        }
      })
    },
    methods: {
      addFix () {
        this.disCount = []
        if (this.timeOneArray) {
          this.disCount.push(this.timeOneArray)
        }
        if (this.timeTwoArray) {
          this.disCount.push(this.timeTwoArray)
        }
        if (this.timeThreeArray) {
          this.disCount.push(this.timeThreeArray)
        }
        this.formData.disCount = JSON.stringify(this.disCount)
        GX.postJson('/backend/fee/types', this.formData, (res) => {
          if (res.result === 0) {
            this.$Message.warning('添加成功')
            setTimeout(() => {
              window.location.href = '/fixprice/manage'
            }, 2000)
          } else {
            this.$Message.warning(res.message)
          }
        })
      },
      showModal () {
        this.showPrice = true
        this.timeDis = ''
        this.hourPrice = ''
        this.kiloPrice = ''
        this.day = ''
        this.night = ''
      },
      // 添加定价
      addPrice () {
        if (this.formData.feetype === '1') {
          this.priceContent.hour = []
          this.priceContent.hour.push([this.timeDis, this.hourPrice])
          this.hTableArray.push([this.timeDis, this.hourPrice])
          this.priceContent.day = this.day
          this.priceContent.night = this.night
          this.formData.priceContent = JSON.stringify(this.priceContent)
        }
        if (this.formData.feetype === '2') {
          this.priceContent = []
          this.fTableArray.push([this.timeDis, this.hourPrice, this.kiloPrice])
          this.priceContent.push([this.timeDis, this.hourPrice, this.kiloPrice])
          this.formData.priceContent = JSON.stringify(this.priceContent)
        }
        this.showPrice = false
      },
      // 删除
      fTableRemove (index) {
        this.fTableArray.splice(index, 1)
      },
      hTableRemove (index) {
        this.hTableArray.splice(index, 1)
      },
      handleChange (time) {
        let Stime = time.join('-')
        this.timeDis = Stime
      }
    },
    components: {
      navBar
    }
  }
</script>

<style>
  .addPriBox {
    text-align: right;
    margin-top: -60px;
  }
  .priceTable {
    width: 100%;
  }
  .butBox {
    margin-top: 20px;
    text-align: right;
  }
  .priceTable thead {
    line-height: 40px;
    text-align: center;
    background-color: #e4e4e4;
    color: #666;
    font-size: 14px;
  }
  .priceTable tbody tr td{
    line-height: 45px;
    color: #666;
    text-align: center;
  }
</style>
