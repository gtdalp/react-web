'use strict';

var user = require('./user');
var category = require('./category');
var article = require('./article');

module.exports = {
  signIn: user.signIn,
  getCategory: category.getCategory,
  getArticleCount: article.getArticleCount
};