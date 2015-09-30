'use strict';

var mongo = require('./mongo');

function signIn(obj, cb) {
  mongo.collection('User').findOne(obj, cb);
}

module.exports = {
  signIn: signIn
};