var home = {};


home.homepage= function(req,res,next){
	return res.render('home.html');
};

module.exports= home;
