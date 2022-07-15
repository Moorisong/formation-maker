
const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const router = express.Router()
const {User} = require("../../src/models/User")



router.post('/logIn', (req, res) => {
  console.log('logIn.js 성공!!');

try{
  let user = new User(req.body);
  user.save()
    .then(() => {console.log (`${user.id} 님의 정보가 추가되었습니다.`)})
  res.send({ result: 'success' });

}catch(e){
  console.log('error---> ', e)
}

})

module.exports = router
