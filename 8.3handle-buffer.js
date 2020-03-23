const http = require('http')
const concat = require('concat-stream')
const url = process.argv[2]
http.get(url, res => {
  if (res.statusCode === 200) {
    res.pipe(concat(buffer => {
      console.log(buffer.length)
      console.log(buffer.toString())
    }))

    res.on('error', console.error)
  }
}).on('error', console.error)