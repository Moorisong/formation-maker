const express = require('express')
const router = express.Router()
const { User } = require('../../src/models/User')

router.post('/register', (req, res) => {
  console.log('register.js 성공!!')

  try {
    let user = new User(req.body)
    user.save().then(() => {
      console.log(`[${user.id}] 님의 정보가 추가되었습니다.`)
    })
    // res.send({ result: 'success' })
    return res.redirect('../../src/pages/Intro.jsx')
  } catch (e) {
    console.log('error---> ', e)
  }
})

module.exports = router
