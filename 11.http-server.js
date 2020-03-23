const http = require('http')
const fs = require('fs')

const [, , port, filePath] = process.argv

http
  .createServer((req, res) => {
    const fileStream = fs.createReadStream(filePath)
    fileStream.pipe(res)
  })
  .listen(port)
