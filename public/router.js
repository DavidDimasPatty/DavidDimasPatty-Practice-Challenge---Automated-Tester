const express=require("express");
const router=express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'page/index.html'));
  })

router.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, 'page/success.html'));
  })

router.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, 'page/survey.html'));
})


module.exports=router;