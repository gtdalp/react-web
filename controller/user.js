'use strict';

var dao = require('../dao');

function signIn(req, res) {
  dao.signIn(req.params.email, req.params.password).then(function (data) {
    res.send(data);
  });
}

module.exports = {
  signIn: signIn
};