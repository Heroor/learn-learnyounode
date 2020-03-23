const path = require('path')
const [,, dirPath, ext] = process.argv

require('fs').readdir(dirPath, 'utf8', (err, fileNameList) => {
  fileNameList.forEach(fileName => {
    path.extname(fileName) === `.${ext}` && console.log(fileName)
  })
})