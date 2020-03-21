const http = require('http')
const bl = require('bl')
const url = process.argv[2]
http.get(url, res => {
  if (res.statusCode === 200) {
    res.pipe(bl((err, data) => {
      if (err) return console.error(err)
      console.log(data.length)
      console.log(data.toString())
    }))

    res.on('error', console.error)
  }
}).on('error', console.error)