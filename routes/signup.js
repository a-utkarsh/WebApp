var express = require('express');
var router  = express.Router();

exports.signup = function(req, res){
	message= "";
	if (req.method=="POST"){
		var post     = req.body;
		var name     = req.body.name;
		var email    = req.body.email;
		var password = req.body.password;
		var phone    = req.body.phone;
		var dob      = req.body.bday;
		var gender   = req.body.gender;
		db.query("SELECT COUNT(*) AS cnt FROM User WHERE email = ? ", email, function(err,data ){
			if(err){
				console.log("error")
			}
			else{
				if(data[0].cnt>0){
					message1= "User already exixts";
					res.render('page.html',{message:message1});
					console.log(message1)
					//	res.status (409).send('User already exixts')
				}

				/* Inserting query to database*/                                                                                                                                                            

				else{
					var sql = 'insert into `User`(`Name`,`Email`,`Password`,`Number`,`DOB`,`Gender`) VALUES ("' + name + '", "' + email + '", "' + password +'", '+ phone+', "' + dob +'", "' + gender + '")';
					db.query(sql, function (err, result) {
						if (err){

							message2= "Incorrect Phone or DOB field";
							res.render('page.html',{message:message2});
							console.log(message2)
					//		res.send('<script>window.alert("Incorrect Phone or DOB field")</script>')
						}
						else{
							console.log("1 record inserted into database");
							res.render('success.html');
							res.status(200)
						}

					});
				}
			}
		});
	}
	else{
		res.render('page.html')
	}
};	

