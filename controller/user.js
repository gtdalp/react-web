'use strict';

var dao = require('../dao');

function signIn(req, res) {
  dao.signIn({email: req.body.email, password: req.body.password}).then(function (err, data) {
    var obj = {code: '10086', msg: err};
    if (data) {
      obj.code = '8000';
      obj.data = data;
      obj.msg = 'sucess';
    }
    res.send(obj);
  });
}

module.exports = {
  signIn: signIn
};