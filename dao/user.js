'use strict';

var User = require('../model').User;
var q = require('q');
function signIn(email, password) {
  var d = q.defer();
  User.findOne({}, function (err, docs) {
    if (err || !docs) {
      console.log(err);
      d.resolve({code: 'fail', msg: err});
      return;
    }
    d.resolve({code: 'OK', msg: '', data: docs});
  });
  return d.promise;
}

module.exports = {
  signIn: signIn
};