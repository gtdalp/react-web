'use strict';

var dao = require('../dao');

function getArticleCount(req, res) {
  dao.getArticleCount(function (err, data) {
    res.send(data);
  });
}

module.exports = {
  getArticleCount: getArticleCount
};