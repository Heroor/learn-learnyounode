const http = require('http')
const url = process.argv[2]
http.get(url, res => {
  if (res.statusCode === 200) {
    res.setEncoding('utf8')
    const resData = []
    res.on('data', chunk => {
      resData.push(chunk)
    })
    res.on('end', () => {
      resData.forEach(name => {
        console.log(name)
      })
    })
    res.on('error', console.error)
  }
}).on('error', console.error)