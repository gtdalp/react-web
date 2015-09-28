'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  githubid: {type: String},
  username: {type: String},
  email: {type: String},
  password: {type: String},
  avatar: {type: String},
  profileUrl: {type: String},
  provider: {type: String},
  token: {type: String},
  isAdmin: {type: Boolean},
  from: {type: String}
});

mongoose.model('Users', userSchema);