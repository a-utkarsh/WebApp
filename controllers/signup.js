var signup  =  {};

signup.signup_submit = function (req, res) {
	
	var	message     = "";
	var post        = req.body;
	var name        = req.body.name;
	var email       = req.body.email;
	var password    = req.body.password;
	var phone       = req.body.phone;
	var dob         = req.body.bday;
	var gender      = req.body.gender;
	
	db.query ("SELECT COUNT(*) AS cnt FROM User WHERE email = ? ", email, function(err,data ) {

		if(err) {
			console.log("error");
		}

		else {
			if(data[0].cnt>0) {
				message1 = "Email address is already registerd!";
				console.log(message1);
				res.status (409).send(message1);
			}
			
			/* Inserting query to database*/                                                                                                                                                            
			else {
				var sql = 'insert into `User`(`Name`,`Email`,`Password`,`Number`,`DOB`,`Gender`) VALUES ("' + name + '", "' + email + '", "' + password +'", '+ phone+', "' + dob +'", "' + gender + '")';
				db.query (sql, function (err, result) {
					if (err) {
						message2 = "Incorrect Phone or DOB field!";
						console.log(message2);
						res.status(409).send(message2);
					}
					else {
						console.log("1 record inserted into database");
						res.redirect('/success');
					}
				});
			}
		}
	});
};	

signup.signup_page = function(req,res) {

	console.log("show signup page");
	return res.render("page.html");
};

module.exports = signup;
