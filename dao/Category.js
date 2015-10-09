'use strict';

var mongo = require('./mongo');

function getCategory(cb) {
  mongo.collection('Category').findItems(cb);
}

module.exports = {
  getCategory: getCategory
};