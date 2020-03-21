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
