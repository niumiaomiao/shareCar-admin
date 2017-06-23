import $ from 'jquery'

export default {
  postJson (url, data, cb, fail) {
    return $.ajax({
      url: url,
      type: 'post',
      dataType: 'json',
      data: window.JSON.stringify(data),
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
  }
}
