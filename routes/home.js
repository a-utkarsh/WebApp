var express = require('express');
var router  = express.Router();
exports.home = function(req,res){
	var message= ''
	res.render('home.html',{message:message})

}
