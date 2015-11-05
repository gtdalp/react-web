'use strict';

var dao = require('../dao');
var ObjectId = require('mongodb').ObjectId;

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
  dao.getArticleByCategoryId({category: req.params.categoryId})
    .then(function (data) {
      var obj = {code: '10086', msg: 'failed'};
      if (data) {
        obj.code = '8000';
        obj.data = data;
        obj.msg = 'success';
      }
      res.send(obj);
    });
}

function getArticleDetailById(req, res) {
  dao.getArticleDetailById({_id: ObjectId(req.params.id)})
    .then(function (data) {
      var obj = {code: '10086', msg: 'failed'};
      if (data) {
        obj.code = '8000';
        obj.data = data;
        obj.msg = 'success';
      }
      res.send(obj);
    });
}

function saveArticle(req, res) {
  dao.saveArticle({
    "_id": req.body._id,
    "category": req.body.category,
    "authorId": 1,
    "title": req.body.title,
    "content": req.body.content,
    "visitCount": 1,
    "origin": req.body.origin,
    "date": new Date()
  }).then(function (data) {
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
  getArticleByCategoryId: getArticleByCategoryId,
  getArticleDetailById: getArticleDetailById,
  saveArticle: saveArticle
};