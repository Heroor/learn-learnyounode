const findExt = require('./find-ext')
const [,, dirPath, ext] = process.argv
findExt(dirPath, ext, (err, data) => {
  if (err) return console.log(err)

  data.forEach(fileName => console.log(fileName))
})