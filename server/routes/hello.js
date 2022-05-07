const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  console.log('hello.js 성공!!')
  res.send({ result: 'success' })
})

module.exports = router
