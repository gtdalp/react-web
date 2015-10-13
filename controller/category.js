'use strict';

var dao = require('../dao');

function getCategory(req, res) {
  dao.getCategory().then(function (data) {
    var obj = {code: '10086', msg: 'failed'};
    if (data) {
      obj.code = '8000';
      obj.data = data;
      obj.msg = 'success';
    }
    res.send(obj);
  }, function (err) {
  });
}

module.exports = {
  getCategory: getCategory
};