'use strict';

var dao = require('../dao');
var q = require('q');

function getCategory(req, res) {
  dao.getCategory().then(function (data) {
    var obj = {code: '10086', msg: err};
    if (data) {
      obj.code = '8000';
      obj.data = data;
      obj.msg = 'sucess';
    }
    res.send(obj);
  }, function (err) {
  });
}

function groupCategory(req, res) {
  var category = [];
  dao.getCategory().then(function (data) {
    category = data;
    return dao.getArticleCount();
  }).then(function (data) {
    var obj = {code: '10086', msg: err};
    if (data) {
      obj.code = '8000';
      obj.data = data;
      obj.msg = 'sucess';
    }

    res.send(obj);
  });
}

module.exports = {
  getCategory: getCategory,
  groupCategory: groupCategory
};