var express = require('express');
var router  = express.Router();

router.get('/', homepage);

function homepage(req,res,next){
	return res.render('home.html');
}
module.exports= router;
