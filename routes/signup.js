var express = require('express');
var router  = express.Router();
var signup  = require('../controllers/signup');

router.get  ('/',signup.signup_page);
router.post ('/submit_signup',signup.signup_submit);

module.exports = router;
