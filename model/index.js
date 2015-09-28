'use strict';

var mongoose = require('mongoose');
var config = require('../config');
var users = require('./users');
var topic = require('./topics');

mongoose.connect(process.env.MONGOLAB_URI || config.dbconnect, function (err) {
  //if (err) throw err;
});

module.exports = {
  Users: mongoose.model('Users')
//  Topics: mongoose.model('Topics')
};