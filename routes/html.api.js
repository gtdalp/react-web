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

//view folder
router.get('/', render('index'));
//can't use admin,because the it conflice with public admin
router.get('/ad', render('admin'));

module.exports = router;

