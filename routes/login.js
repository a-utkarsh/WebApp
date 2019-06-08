var express = require('express');
var router  = express.Router();

exports.login= function(req,res){
	var session = req.session;
	if(req.method=="POST"){
		var post =req.body;
		var email= post.email;
		var password = post.password;
		if (email && password){
			db.query('SELECT * FROM User WHERE email= ? AND password= ?',[email, password],function(error, results, fields){
				if(results.length>0){
					req.session.userId = results[0].id;
					req.session.user   = results[0];
					console.log(results[0].id);
					res.redirect('/login_success')
				}
				else{
				//	res.send('<script>alert("Email or password incorrect")</script>');
					message1= "Email or Password incorrect";
					res.render('login.html',{message:message1})
					console.log(message1)
				}

			});
		}
		else{
			message2= "Please enter your email and password";
			res.render('login.html',{message:message2});
			console.log(message2)
		//	res.send('Please enter your email and password');

		}
	}
	else{
		res.render('login.html')
	}
};
