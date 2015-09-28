'use strict';

var Users = require('../model').Users;
var q = require('q');
function signIn(obj, cb) {
  Users.find(obj).exec(cb);
}

module.exports = {
  signIn: signIn
};