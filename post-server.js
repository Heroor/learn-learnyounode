const http = require('http')
const map = require('through2-map')

http
  .createServer((req, res) => {
    if (req.method === 'post') {
      return res.end('method error for post')
    }
    req
      .pipe(
        map(buf => {
          return buf.toString().toUpperCase()
        })
      )
      .pipe(res)
  })
  .listen(+process.argv[2])
