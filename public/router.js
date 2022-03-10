const express=require("express");
const router=express.Router();
const path = require('path');
var basicAuth = require('express-basic-auth');

router.use(basicAuth({
  challenge: true,
  users:{'topcoder':'rocks'}
}))

router.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, 'page/success.html'));
  })

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'page/survey.html'));
})


module.exports=router;