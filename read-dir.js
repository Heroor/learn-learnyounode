const [,, dirPath, extension] = process.argv

require('fs').readdir(dirPath, 'utf8', (err, fileNameList) => {
  fileNameList.forEach(fileName => {
    fileName.endsWith(`.${extension}`) && console.log(fileName)
  })
})