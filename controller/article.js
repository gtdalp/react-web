'use strict';

var dao = require('../dao');

function getArticleCount(req, res) {
  dao.getArticleCount().then(function (data) {
    res.send(data);
  });
}

module.exports = {
  getArticleCount: getArticleCount
};