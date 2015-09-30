'use strict';

var dao = require('../dao');

function signIn(req, res) {
  dao.signIn({email: req.body.email, password: req.body.password}, function (err, docs) {
    if (err) {
      res.send({code: '10086', msg: err});
    }

    res.send({code: '8000', msg: docs});
  });
}

module.exports = {
  signIn: signIn
};