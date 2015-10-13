'use strict';

var mongo = require('./mongo');
var q = require('q');

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

module.exports = {
  getArticleCount: getArticleCount
};
