'use strict';

var users = require('./user');
var category = require('./category');
var article = require('./article');

module.exports = {
  signIn: users.signIn,
  getCategory: category.getCategory,
  getArticleCount: article.getArticleCount
};