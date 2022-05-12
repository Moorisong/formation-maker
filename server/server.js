const express = require('express')
const mongoose = require('mongoose')
const app = express()
const api = require('./routes/hello')
const cors = require('cors')

app.use(cors())
app.use('/', api)

app.listen(3001, () => {
  console.log('connected port:3001')
  mongoose
    .connect(
      'mongodb+srv://ksh:ksh@songcluster.hgpfq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    )
    .then(() => {
      console.log('mongoDB connected!')
    })
    .catch(err => {
      console.log('error--->', err)
    })
})
