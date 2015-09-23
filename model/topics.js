'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var topicSchema = new Schema({
  category: {type: String},
  authorId: {type: ObjectId},
  title: {type: String},
  content: {type: String},
  visitCount: {type: Number, default: 0},
  transfer: {type: Boolean},
  insertAt: {type: Date, default: Date.now},
  updateAt: {type: Date, default: Date.now}
});

mongoose.model('Topics', topicSchema);
