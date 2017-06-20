import axios from 'axios'

// axios
export class AXIOS {
  // 获取已授权列表
  get (param) {
    return axios.get(param.api, {})
  }
  post (param) {
    return axios.post(param.api, {})
  }
  reqSuccess (obj, msg) {

  }
  reqFail (obj, msg) {

  }
}
export default AXIOS
