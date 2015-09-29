'use strict';

var mongoose = require('mongoose');
var config = require('../config');
//var user = require('./user');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mySchema = Schema({name: String});

var User = mongoose.model('User', mySchema);


mongoose.connect(config.dbconnect, function (err) {
  if (err) throw err;
  User.find({name: '2'})
    .exec(function (err, docs) {
      if (err) return done(err);

      console.log(err);
      console.log(docs);
    });
});


module.exports = {
  User: mongoose.model('User')
//  Topics: mongoose.model('Topics')
};