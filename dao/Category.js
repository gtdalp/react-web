'use strict';

var mongo = require('./mongo');
var q = require('q');

function getCategory() {
  var d = q.defer();
  mongo.collection('Category').findItems(function (err, data) {
    err ? d.reject(err) : d.resolve(data);
  });
  return d.promise;
}

module.exports = {
  getCategory: getCategory
};