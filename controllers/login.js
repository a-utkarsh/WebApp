var login 	= {};

login.show_login_page = function (req, res, next) {

	console.log ('showing login page');
	return res.render('login.html');
};

login.submit_info = function (req, res, next) {

	var session  = req.session;
	var post     = req.body;
	var email    = post.email;
	var password = post.password;

	console.log(post);

	if (email && password) {
		db.query ('SELECT * FROM User WHERE email= ? AND password= ?',[email, password], function (error, results, fields) {
			if(results.length>0) {
				req.session.userId = results[0].id;
				req.session.user   = results[0];
				console.log(results[0].id);
				res.redirect('/login_success');
			}

			else{
				var message1= "Email or Password incorrect";
				res.status(409).send(message1);
				console.log(message1);
			}
		});
	}
};
module.exports = login;
