const path = require('path')
const fs = require('fs')

module.exports = function findExt (dirPath, ext, callback) {
  fs.readdir(dirPath, 'utf8', (err, fileList) => {
    if (err) {
      return callback && callback(err)
    }
    try {
      const files = fileList.filter(fileName => {
        return path.extname(fileName) === `.${ext}`
      })
      callback && callback(null, files)
    } catch (error) {
      callback && callback(error)
    }
  })
}