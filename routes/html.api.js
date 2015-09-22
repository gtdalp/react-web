/**
 * Created by Microlv on 2015/9/10.
 */
'use strict';

var _ = require('lodash');
var express = require('express');
var router = express.Router();

function render(html) {
	return function (req, res) {
		//render the admin folder files
		res.render(html);
	};
}

//http://localhost:3000/admin
router.get('/', render('index'));
router.get('/admin', render('admin'));

module.exports = router;

