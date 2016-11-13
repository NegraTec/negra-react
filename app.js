var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Negra reaja!')
})

app.listen(3000, function () {
  console.log('Negra React listening on port 3000!')
})
