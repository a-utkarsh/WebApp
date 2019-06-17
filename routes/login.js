var express 	= require('express');
var router  	= express.Router();
var login  		= require('../controllers/login');

router.get  ('/', login.show_login_page);
router.post ('/submit', login.submit_info);

module.exports=router;
