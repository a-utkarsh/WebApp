var express = require('express');
var router  = express.Router();

exports.success = function(req,res,next){
	if (res.status == 200){
		res.render('success.html')
	}
	else{
		res.redirect('/signup')
	}

}
