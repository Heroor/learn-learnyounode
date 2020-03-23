const http = require('http')

function getDate(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
}

function getUnixtime(date) {
  return {
    unixtime: date.getTime()
  }
}``

http.createServer((req, res) => {
  const url = new URL(req.url, 'http://example.com')
  const ISODate = url.searchParams.get('iso') || new Date
  const date = new Date(ISODate)
  let data
  if (/^\/api\/parsetime/.test(req.url)) {
    data = getDate(date)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    data = getUnixtime(date)
  }

  if (data) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    return res.end(JSON.stringify(data))
  } else {
    res.writeHead(404)
  }
}).listen(process.argv[2])