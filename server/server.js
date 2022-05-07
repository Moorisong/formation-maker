const express = require('express')
const app = express()
const api = require('./routes/hello')
const cors = require('cors')

app.use(cors())
app.use('/', api)

app.listen(3001, function () {
  console.log('3001에 연결됨')
})
