'use strict';

var User = require('../model').User;

function signIn(email, password) {
  User.find({}, function (err, docs) {
    if (err) return next(err);
    //res.send(docs);
  });
}

module.exports = {
  signIn: signIn
};