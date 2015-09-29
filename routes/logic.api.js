/**
 * Created by Microlv on 2015/9/16.
 */
'use strict';

var express = require('express');
var router = express.Router();
var dao = require('../dao');

//client
router.get('/test', function (req, res) {
  res.send({code: "OK"});
});

//admin
router.post('/signIn', dao.signIn);

module.exports = router;

