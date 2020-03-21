const { httpGet, concatStream } = require('./utils.js')
const [, , ...urls] = process.argv

const promiseQueue = urls.map(url => httpGet(url).then(concatStream))
Promise.all(promiseQueue).then(bufList => {
  bufList.forEach(buf => console.log(buf.toString()))
}).catch(console.error)
