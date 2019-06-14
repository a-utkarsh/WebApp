var express	= require('express');
var router  = express.Router();
var signup	= require('./signup');

router.get('/',on_success);

function on_success(req, res,next){
	console.log(req);
	console.log("show success page");
	res.render("success.html");
}

module.exports= router;
