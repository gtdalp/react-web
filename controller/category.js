'use strict';

var dao = require('../dao');

function getCategory(req, res) {
  dao.getCategory(function (err, data) {
    var obj = {code: '10086', msg: err};
    if (data) {
      obj.code = '8000';
      obj.data = data;
      obj.msg = 'sucess';
    }

    res.send(obj);
  });
}

//function groupCategory(req, res) {
//  dao.getCategory(function (err, data) {
//    var obj = {code: '10086', msg: err};
//    if (data) {
//      obj.code = '8000';
//      obj.data = data;
//      obj.msg = 'sucess';
//    }
//
//    res.send(obj);
//  });
//}

module.exports = {
  getCategory: getCategory,
  groupCategory: groupCategory
};