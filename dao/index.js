'use strict';

var users = require('./user');
var category = require('./category');
var article = require('./article');

module.exports = {
  signIn: users.signIn,
  getCategory: category.getCategory,

  //article
  getArticleCount: article.getArticleCount,
  getArticleList: article.getArticleList,
  getArticleByCategoryId: article.getArticleByCategoryId,
  getArticleDetailById: article.getArticleDetailById,
  saveArticle: article.saveArticle
};