'use strict';

var dao = require('../dao');

function getArticleCount(req, res) {
  dao.getArticleCount().then(function (err, data) {
    res.send(data);
  });
}

module.exports = {
  getArticleCount: getArticleCount
};