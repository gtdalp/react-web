'use strict';

var mongo = require('./mongo');


function getArticleCount(cb) {
  mongo.collection('Article').aggregate(
    [{
      $project: {category: 1}
    }, {
      $group: {
        _id: '$category',
        count: {$sum: 1}
      }
    }], cb);
}

module.exports = {
  getArticleCount: getArticleCount
};