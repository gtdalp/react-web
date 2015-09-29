'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var mySchema = Schema({ name: String });

/* global db */
module.exports = mongoose.model('User', mySchema);
