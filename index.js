const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Sample Node App is running!')
})
var port = 8080;
app.listen(port, function () {
  console.log('Example app listening on port '+port)
})