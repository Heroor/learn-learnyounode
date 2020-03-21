const http = require('http')
const bl = require('bl')

exports.httpGet = function(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url, res => {
        if (res.statusCode === 200) {
          resolve(res)
        } else {
          reject({
            status: res.statusCode,
            msg: 'request error'
          })
        }
        res.on('error', reject)
      })
      .on('error', reject)
  })
}

exports.concatStream = function(res) {
  return new Promise((resolve, reject) =>
    res.pipe(
      bl((err, buf) => {
        if (err) return reject(err)
        resolve(buf)
      })
    )
  )
}

const paddingZero = num => ('0' + num).substr(-2)

exports.getDate = function () {
  const date = new Date
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const min = date.getMinutes()
  return [year, paddingZero(month), paddingZero(day)].join('-') + ' ' + [hour, min].map(paddingZero).join(':')
}

