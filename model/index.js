'use strict';

var mongoose = require('mongoose');
var config = require('../config');
var user = require('./user');

mongoose.connect(config.dbconnect, function (err) {
  if (err) throw err;
});

module.exports = {
  User: mongoose.model('User')
//  Topics: mongoose.model('Topics')
};