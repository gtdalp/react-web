'use strict';
var users = require('./user');
var category = require('./category');

module.exports = {
  signIn: users.signIn,
  getCategory: category.getCategory
};