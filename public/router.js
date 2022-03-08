const express=require("express");
const router=express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'page/index.html'));
  })

router.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, 'page/success.html'));
  })


module.exports=router;