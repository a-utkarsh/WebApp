var express 		 = require('express');
var path 			 = require('path');
var mysql 			 = require('mysql');
var bodyParser 		 = require('body-parser')
var app 			 =  express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var fs               = require("fs");
var multer           = require("multer")
var signup			 = require('./routes/signup')
var login			 = require('./routes/login')
var login_success	 = require('./routes/login_success');
var success          = require('./routes/success')
var connection       = mysql.createConnection({
	host			 : "localhost",
	user			 : "admin",
	password		 : "anand@123",
	database		 : "Test"
});

/* Rendering HTML and CSS page using ejs */

app.use(express.static(path.join(__dirname, 'public'))); 
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

/* using routes */

app.use('/', signup);
app.use('/login',login);
app.use('/success',success);
app.use('/login_success',login_success);


/* Performing signup operations on '/' routes */

app.post('/',urlencodedParser,function(req,res){
	var name     = req.body.name;
	var email    = req.body.email;
	var password = req.body.password;
	var phone    = req.body.phone;
	var dob		 = req.body.bday;
	var gender   = req.body.gender;
	console.log("MySQL Database Connected Successfully");

	/* Checking whether email address is already registered*/

	connection.query("SELECT COUNT(*) AS cnt FROM User WHERE email = ? ", email, function(err,data ){
		if(err){
			console.log("error")
		}
		else{
			if(data[0].cnt>0){
				res.status (409).send('User already exixts')
			}

			/* Inserting query to database*/

			else{
				var sql= 'insert into User values ("' + name + '", "' + email + '", "' + password +'", '+ phone+', "' + dob +'", "' + gender + '")';
				connection.query(sql, function (err, result) {
					if (err){
						res.send('<script>window.alert("Incorrect Phone or DOB field")</script>')
					}
					else{
						console.log("1 record inserted into database");
					}
					return res.redirect('/success');
					setTimeout();
					connection.end();
				});
			}
		}
	});
});

/* Performing Login Operation*/

app.post('/login', urlencodedParser,function(req,res){
	var email= req.body.email;
	var password = req.body.password;
	console.log(email,password);
	if (email && password){
		connection.query('SELECT * FROM User WHERE email= ? AND password= ?',[email, password],function(error, results, fields){
			if(results.length>0){
				console.log(results)
				res.redirect('/login_success')
			}
			else{
				res.send('<script>alert("Email or password incorrect")</script>');
			}
			res.end();
		});
	}
	else{
		res.send('Please enter your email and password');
		res.end();
	}
});
/* Creating Server */
var server   = app.listen(8081,function(){
	var host = server.address().address
	var port = server.address().port
	console.log("Host Connectd", host, port)
});
