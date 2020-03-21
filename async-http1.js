const { httpGet, concatStream } = require('./utils.js')
const [, , ...urls] = process.argv

async function main() {
  for (let i = 0, l = urls.length; i < l; i += 1) {
    try {
      const buf = await httpGet(urls[i]).then(concatStream)
      console.log(buf.toString())
    } catch (error) {
      console.error(error)
    }
  }
}
main()
