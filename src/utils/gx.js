import $ from 'jquery'

export default {
  postJson (url, data, cb, fail) {
    return $.ajax({
      url: url,
      type: 'post',
      dataType: 'json',
      data: data,
      success (res) {
        cb(res)
      },
      error () {
        fail ? fail() : ''
      }
    })
  },
  getJson (url, data, cb, fail) {
    return $.ajax({
      url: url + '?timestamp=' + new Date().getTime(),
      type: 'get',
      dataType: 'json',
      data: data,
      success (res) {
        cb ? cb(res) : ''
      },
      error () {
        fail ? fail() : ''
      }
    })
  },
  deleteJson (url, data, cb) {
    return $.ajax({
      url: url,
      type: 'DELETE',
      dataType: 'json',
      success (res) {
        cb(res)
      }
    })
  },
  putJson (url, data, cb) {
    return $.ajax({
      url: url,
      type: 'PUT',
      dataType: 'json',
      data: data,
      success (res) {
        cb(res)
      }
    })
  },
  postFile (url, data, cb) {
    return $.ajax({
      type: 'POST',
      url: url,
      cache: false,
      dataType: 'json',
      data: data,
      processData: false,
      contentType: false,
      success (res) {
        cb(res)
      }
    })
  },
  formatDate (date, fmt) {
    let theDate = new Date(date)
    var o = {
      'M+': theDate.getMonth() + 1, // 月份
      'd+': theDate.getDate(), // 日
      'h+': theDate.getHours(), // 小时
      'm+': theDate.getMinutes(), // 分
      's+': theDate.getSeconds(), // 秒
      'q+': Math.floor((theDate.getMonth() + 3) / 3), // 季度
      'S': theDate.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (theDate.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt
  }
}
