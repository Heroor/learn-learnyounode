const net = require('net')
const { getDate } = require('./utils')

net
  .createServer(con => {
    con.end(getDate() + '\n')
  })
  .listen(process.argv[2])
