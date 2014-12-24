exports.islogin = function(req, res, next){
	if(!req.cookies.username){
		res.render('message', {info:'还没有登陆', type:'warning', time:1, url:'/'});
	}else{
		next();
	}
}
