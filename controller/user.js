'use strict';

var dao = require('../dao');

function signIn(req, res) {
  dao.signIn(req.body.email, req.body.password).then(function (docs) {
//    var result = {code: 'OK', msg: '³É¹¦', data: docs};
//    if (docs.length === 0) {
//      result = {code: 'fail', msg: 'Ê§°Ü'};
//    }
    res.send(docs);
  });
}

module.exports = {
  signIn: signIn
};