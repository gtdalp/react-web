/**
 * Created by Microlv on 2015/9/16.
 */
'use strict';

var _ = require('lodash');
var express = require('express');
var router = express.Router();

//client
router.get('/test', function (req, res) {
  res.send({result: "OK"});
});


//admin
router.post('/signIn', function (req, res) {
  res.send({code: "OK"});
});


module.exports = router;

