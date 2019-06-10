var express = require('express');
var router  = express.Router();
var login   = require('./login');
exports.dashboard = function(req,res,next){
	var user  = req.session.user;
	var userId = req.session.userId;
	console.log("User Id="+userId);
	if (userId == null){
		res.redirect("/login");
		return;
	}
	var sql="SELECT * FROM `User` WHERE `id`='"+userId+"'";
	db.query(sql, function(err,results){
		if (err){
			console.log("error in fetching data")
		}
		else{
			console.log(results);
			res.render('login_success.html',{user:user})
		}

	});
};

exports.logout = function(req,res){
	req.session.destroy(function(err){
		res.redirect('/login');
	})
};
