'use strict';

var mongo = require('./mongo');
var q = require('q');
var _ = require('lodash');

function getArticleCount() {
  var d = q.defer();
  mongo.collection('Article').aggregate(
    [{
      $project: {category: 1}
    }, {
      $group: {
        _id: '$category',
        count: {$sum: 1}
      }
    }], function (err, data) {
      err ? d.reject(err) : d.resolve(data);
    });
  return d.promise;
}

function getArticleList() {
  var d = q.defer();
  mongo.collection('Article').findItems(function (err, data) {
    _.forEach(data, function (item) {
      item.content = item.content.length > 300 ? item.subString(0, 300) : item.content;
    });

    err ? d.reject(err) : d.resolve(data);
  });
  return d.promise;
}

module.exports = {
  getArticleCount: getArticleCount,
  getArticleList: getArticleList
};
