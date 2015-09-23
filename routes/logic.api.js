/**
 * Created by Microlv on 2015/9/16.
 */
'use strict';

var _ = require('lodash');
var express = require('express');
var router = express.Router();
var controller = require('../controller');

//client
router.get('/test', function (req, res) {
  res.send({code: "OK"});
});

//admin
router.post('/signIn', controller.signIn);

module.exports = router;

