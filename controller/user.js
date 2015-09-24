'use strict';

var dao = require('../dao');

function signIn(req, res) {
  dao.signIn(req.body.email, req.body.password).then(function (data) {
    res.send(data);
  });
}

module.exports = {
  signIn: signIn
};