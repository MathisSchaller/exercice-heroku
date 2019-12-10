const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000 // this is very important

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(PORT, function () {
  console.log('API exercice Heroku listening on ' + PORT)
})
