'use strict';

var mongoose = require('mongoose');
var config = require('../config');
var user = require('./user');
var topic = require('./topics');

mongoose.connect(process.env.MONGOLAB_URI || config.dbconnect, function (err) {
  //if (err) throw err;
});

module.exports = {
  User: mongoose.model('User')
//  Topics: mongoose.model('Topics')
};