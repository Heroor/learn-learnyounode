const textArr = require('fs')
  .readFileSync(process.argv[2], 'utf8')
  .split('\n')

console.log(textArr.length - 1)