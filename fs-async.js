require('fs').readFile(process.argv[2], 'utf8', (err, data) => {
    console.log(data.split('\n').length - 1)
  })
