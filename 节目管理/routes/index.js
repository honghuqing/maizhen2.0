
/*
 * GET home page.
 */

exports.index = function(req, res){
	if(req.cookies.username){
		res.render('message',{info:'您已经登录',type:'success', time:1, url:'/special'})
	}else{
		res.render('login');
	}
};

exports.reg = function(req, res){
  res.render('register');
};
