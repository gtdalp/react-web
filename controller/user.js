'use strict';

var dao = require('../dao');

function signIn(req, res) {
  dao.signIn({email: req.body.email, password: req.body.password}, function (err, docs) {
    var obj = {code: '10086', msg: err};
    if (docs) {
      obj.code = '8000';
      obj.msg = 'sucess';
    }
    res.send(obj);
  });
}

module.exports = {
  signIn: signIn
};