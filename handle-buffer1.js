const http = require('http')
const bl = new require('bl')()
const url = process.argv[2]
http.get(url, res => {
  if (res.statusCode === 200) {
    res.on('data', chunk => {
      bl.append(chunk)
    })
    res.on('end', () => {
      console.log(bl.length)
      console.log(bl.toString())
    })
    res.on('error', console.error)
  }
}).on('error', console.error)