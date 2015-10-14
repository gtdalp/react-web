'use strict';

var mongo = require('./mongo');
var q = require('q');

function signIn(obj) {
  var d = q.defer();
  mongo.collection('User').findOne(obj, function (err, data) {
    err ? d.reject(err) : d.resolve(data);
  });
  return d.promise;
}

module.exports = {
  signIn: signIn
};