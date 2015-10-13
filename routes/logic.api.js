/**
 * Created by Microlv on 2015/9/16.
 */
'use strict';

var express = require('express');
var router = express.Router();
var controller = require('../controller');

//client
router.get('/test', function (req, res) {
  res.send({code: "OK"});
});

//admin
//post
router.post('/signIn', controller.signIn);

//get
router.get('/getCategory', controller.getCategory);
//router.get('/groupCategory', controller.groupCategory);
router.get('/getArticleCount', controller.getArticleCount);

module.exports = router;

