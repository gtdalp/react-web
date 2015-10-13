'use strict';

var dao = require('../dao');

function signIn(req, res) {
  dao.signIn({email: req.body.email, password: req.body.password}).then(function (data) {
    var obj = {code: '10086', msg: 'failed'};
    if (data) {
      obj.code = '8000';
      obj.data = data;
      obj.msg = 'success';
    }
    res.send(obj);
  });
}

module.exports = {
  signIn: signIn
};