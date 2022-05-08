const express = require('express')
const mongoose = require('mongoose')
const app = express()
const api = require('./routes/hello')
const cors = require('cors')

app.use(cors())
app.use('/', api)

app.listen(3001, () => {
  console.log('3001에 연결됨')
  mongoose
    .connect(
      'mongodb+srv://ksh:ksh@songcluster.hgpfq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    )
    .then(() => {
      console.log('몽구스 연결 성공!!')
    })
    .catch(err => {
      console.log('에러발생 -->', err)
    })
})
