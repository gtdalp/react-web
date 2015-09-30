'use strict';

var mongo = require('mongoskin');
var config = require('../config');

var db = mongo.db(config.dbconnect);

module.exports = db;
