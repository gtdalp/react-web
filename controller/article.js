'use strict';

var dao = require('../dao');

function getArticleCount(req, res) {
  dao.getArticleCount().then(function (data) {
    var obj = {code: '10086', msg: 'failed'};
    if (data) {
      obj.code = '8000';
      obj.data = data;
      obj.msg = 'success';
    }
    res.send(obj);
  });
}

function getArticleList(req, res) {
  dao.getArticleList().then(function (data) {
    var obj = {code: '10086', msg: 'failed'};
    if (data) {
      obj.code = '8000';
      obj.data = data;
      obj.msg = 'success';
    }
    res.send(obj);
  });
}

function getArticleByCategoryId(req, res) {
  dao.getArticleByCategoryId({categoryId: req.params.categoryId}).then(function (data) {
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
  getArticleCount: getArticleCount,
  getArticleList: getArticleList,
  getArticleByCategoryId: getArticleByCategoryId
};