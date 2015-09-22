/**
 * Created by Microlv on 2015/9/16.
 */
'use strict';

var _ = require('lodash');
var express = require('express');
var router = express.Router();

router.get('/test', function (req, res) {
  res.send({result: "OK"});
});


module.exports = router;

