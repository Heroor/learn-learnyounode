const async = require('async')
const { httpGet, concatStream } = require('./utils.js')
const [, , ...urls] = process.argv

async.eachSeries(urls, (url, cb) => {
  httpGet(url).then(concatStream).then(buf => {
    console.log(buf.toString())
    cb()
  })
})
