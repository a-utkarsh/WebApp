var express 		 = require('express');
var path 			 = require('path');
var mysql 			 = require('mysql');
var bodyParser 		 = require('body-parser');
var app 			 =  express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var http  			 = require('http');
var fs               = require("fs");
var multer           = require("multer");
var signup			 = require('./routes/signup');
var login			 = require('./routes/login');
var login_success	 = require('./routes/login_success');
var success          = require('./routes/success');
var home 			 = require('./routes/home.js');
var session          = require('express-session');
var favicon			 = require('express-favicon');
var connection       = mysql.createConnection({
	host			 : "localhost",
	user			 : "admin",
	password		 : "anand@123",
	database		 : "Test"
});
connection.connect();
global.db= connection;

/* Rendering HTML and CSS page using ejs */

app.use(express.static(path.join(__dirname, 'public'))); 
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname , 'public')));
app.use(session({
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true,
	cookie: { maxAge: 60000 }
}));

/* Development only */
app.get('/',home.home);
app.get('/signup', signup.signup);
app.post('/signup',signup.signup);
app.get('/success',success.success);
app.use ('/login', login);
app.get('/login_success', login_success.dashboard);//call for dashboard page after login
app.get('/logout',login_success.logout);

/* Creating Server */
var server   = app.listen(8081,function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Host Connectd", host, port);
});
