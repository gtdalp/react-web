'use strict';

var user = require('./user');
var category = require('./category');

module.exports = {
  signIn: user.signIn,
  getCategory: category.getCategory
};