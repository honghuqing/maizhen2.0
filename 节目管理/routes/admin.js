/*
 * 管理员管理
 */
var mongoose = require('mongoose');
var crypto = require('crypto');
var fs = require('fs');
var moment = require('moment');
var url = require('url');
var async = require('async');
var _ = require('underscore');
var adminSchema = require('../model/mongo.js');
var admin = mongoose.model('admin');
var special = mongoose.model('special');
var show = mongoose.model('show');

// 添加管理员
exports.adduser = function(req, res){
  var userInfo = {
		username:req.body.username,
		password:crypto.createHash('sha1').update(req.body.password).digest('hex')
	}
	new admin(userInfo).save(function(err, data){
		if(!err){
			res.render('message',{info:'添加成功',type:'success',time:1,url:'/'});
		}else{
			res.render('message',{info:'失败成功',type:'warning',time:1,url:'/reg'});
		}
	});
};


// 处理管理员登陆
exports.dologin = function(req, res){
  var userInfo = req.body;
	admin.findOne({'username':userInfo.username}, function(err, data){
		if(data){
			var pwd = crypto.createHash('sha1').update(userInfo.pwd).digest('hex');
			if(data.password == pwd){	
				res.cookie('username',userInfo.username);
				res.render('message',{info:'登陆成功',aype:'success', time:1, url:'/special'});
			}else{
				res.render('message',{info:'登陆失败',aype:'warning', time:1, url:'/'});
			}
		} else {
			res.render('message',{info:'用户名不存在',type:'success', time:1, url:'/'});
		}						
	});
};

/**
* 专辑操作模块
*/
exports.special = function(req, res){
	special
	.find({})
	.sort({'_id':-1})
	.exec(function(err, data){
		if(!err){
			res.render('special',{data:data});
		}					
	});
};
//	添加专辑页面
exports.addspecial = function(req, res){
	res.render('addspecial');
}
// 添加专辑信息到数据库
exports.insertspecial = function(req, res){
	var specialInfo = req.body;
	var pictureName = req.files.picture.name;
	var pictureTempDir = req.files.picture.path;
	var unique = new Date().getTime();  //生成唯s一的头像图片名称
	var imgName = unique + pictureName;
	var path = '/node/app0.1/public/uploads/' + imgName;
	fs.rename(pictureTempDir, path, function(err){
		if(err){
			console.log(err);return;
			res.render('message',{info:'上传图片失败！',type:'warning', time:2, url:'/addspecial'});
		}else{
			var data = {
				title:specialInfo.title,
				desc:specialInfo.desc,
				picture:imgName,
				author:specialInfo.author,
				addtime:moment().format('YYYY-MM-DD HH:mm')
			};
			new special(data).save(function(err, data){
				if(err){
					res.render('message', {info:"添加失败！", type:'warning', time:2, url:'/addspecial'})
				}else{
					res.render('message', {info:"添加成功！", type:'success', time:1, url:'/special'})
				}				
			});
		}
	});
};

//删除专辑信息
exports.delspecial = function(req, res){
	var id = req.params.id;

	async.auto({
							delSpecialImg:function(callback){
								special.findOne({'_id':id}, function(err, data){
										if(err){
											callback(err);
										}else{
											fs.unlink('/node/app0.1/public/uploads/'+data.picture);
											callback(null,'1');		
										}
								})
							},
							delSpecial:['delSpecialImg', function(callback){
								special.remove({'_id':id}, function(err, data){
									if(!err){
										callback(null,'删除节目');	
									}else{
										callback(err);
									}
								})
							}]
						},function(err, results){
							if(!err){
								res.redirect('/special');		
							}
						});
}
// 修改专辑信息页面
exports.editspecial = function(req, res){
	var id = req.params.id;
	special.findOne({'_id':id}, function(err, data){
		if(!err && data){
			res.render('editspecial', {data:data});
		}else{
			res.render('message', {info:'你需要修改的数据不存在',type:'warning',time:1,url:'/special'});
		}						
	
	});
}

// 修改数据库专辑信息
exports.updatespecial = function(req, res){
  var specialInfo = req.body;
	if(req.files.picture.size != 0 && req.files.picture.name != ''){
  var pictureName = req.files.picture.name;
  var pictureTempDir = req.files.picture.path;
  var unique = new Date().getTime();  //生成唯s一的头像图片名称
  var imgName = unique + pictureName;
  var path = '/node/app0.1/public/uploads/' + imgName;
  fs.rename(pictureTempDir, path, function(err){
		if(err){
			console.log(err);return;
			res.render('message',{info:'上传图片失败！',type:'warning', time:2, url:'/editspecial/'+specialInfo.id});
		}else{
			var data = {
				title:specialInfo.title,
				desc:specialInfo.desc,
				picture:imgName,
				author:specialInfo.author,
			};
			special.update({'_id':specialInfo.id}, data, function(err, data){
				if(err){
					res.render('message', {info:"修改失败！", type:'warning', time:2, url:'/editspecial/'+specialInfo.id})
				}else{
					fs.unlink('/node/app0.1/public/uploads/'+specialInfo.oldpicture); // 删除被修改的图片
					res.render('message', {info:"修改成功！", type:'success', time:1, url:'/special'})
				}				
			});
		}
	});
	}else{
		var data = {
			title:specialInfo.title,
			desc:specialInfo.desc,
			author:specialInfo.author,
		};
		special.update({'_id':specialInfo.id}, data, function(err, data){
			if(err){
				res.render('message', {info:"修改失败！", type:'warning', time:2, url:'/editspecial/'+specialInfo.id})
			}else{
				res.render('message', {info:"修改成功！", type:'success', time:2, url:'/special'})
			}				
		});
	}
};



/**
* 节目操作模块
* 
*/
exports.show = function(req, res){
	if(req.params.id){ // 判断是否是从专辑过来的请求
		special
		.findOne({'_id':req.params.id})
		.select({'shows':1,'title':1})
		.populate('shows')
		.exec(function(err, data){
			res.render('show',{data:data.shows,title:data.title});
		});
	}else{
		show.find()
				.sort({'_id':-1})
				.populate({
							path:'special',
							select:'title'
										})
				.exec(function(err, data){
			if(!err){
				res.render('show',{data:data,title:''});
			}						
		});
	}

};
//  添加节目 信息页面
exports.addshow = function(req, res){
	special.find().sort({'_id':-1}).exec(
		function(err, data){
			if(!err){
				res.render('addshow',{data:data});
			}
		}						
	);
};
//   添加节目到数据库
exports.insertshow = function(req, res){
	var showInfo = req.body;
	var pictureName = req.files.picture.name;
	var pictureTempDir = req.files.picture.path;
	var unique = new Date().getTime();  //生成唯s一的头像图片名称
	var imgName = unique + pictureName;
	var path = '/node/app0.1/public/uploads/' + imgName;
	fs.rename(pictureTempDir, path, function(err){
		if(err){
			console.log(err);return;
			res.render('message',{info:'上传图片失败！',type:'warning', time:2, url:'/addshow'});
		}else{
	/*		var data = {
				title:showInfo.title,
				desc:showInfo.desc,
				picture:imgName,
				special:showInfo.special,
				url:showInfo.url,
				addtime:moment().format('YYYY-MM-DD HH:mm')
		
				};*/
		showInfo.addtime = moment().format('YYYY-MM-DD HH:mm');
		showInfo.picture = imgName;
			new show(showInfo).save(function(err, data){
				if(err){
					res.render('message', {info:"添加失败！", type:'warning', time:2, url:'/addshow'})
				}else{
					special.findOne({'_id':showInfo.special},function(err, spe){
						spe.shows.push(data._id);
						spe.save(function(err, showsSaveRes){
							if(!err){
								res.cookie('lastshow',data._id);
								res.render('message', {info:"添加成功！", type:'success', time:1, url:'/show'})
							}		
						})
					})
				}				
			});
		}
	});
};

// 修改节目信息
exports.editshow = function(req, res){
	var id = req.params.id;
	show.findOne({'_id':id}, function(err, data){
		if(!err && data){
			special.find({}, {'_id':1,'title':1}, function(err, speData){
				res.render('editshow', {data:data, special:speData});
			});
		}else{
			res.render('message', {info:'你需要修改的数据不存在',type:'warning',time:1,url:'/show'});
		}						
	});
}

// 修改数据库节目信息
exports.updateshow = function(req, res){
	var showInfo = req.body;
	if(req.files.picture.size != 0 && req.files.picture.name != ''){
	var pictureName = req.files.picture.name;
	var pictureTempDir = req.files.picture.path;
	var unique = new Date().getTime();  //生成唯s一的头像图片名称
	var imgName = unique + pictureName;
	var path = '/node/app0.1/public/uploads/' + imgName;
	fs.rename(pictureTempDir, path, function(err){
		if(err){
			res.render('message',{info:'上传图片失败！',type:'warning', time:2, url:'/editshow/'+showInfo.id});
		}else{
			var data = {
				title:showInfo.title,
				desc:showInfo.desc,
				picture:imgName,
				url:showInfo.url
			};
			show.update({'_id':showInfo.id}, data, function(err, data){
				if(err){
					res.render('message', {info:"修改失败！", type:'warning', time:2, url:'/editshow/'+showInfo.id})
				}else{
					fs.unlink('/node/app0.1/public/uploads/'+showInfo.oldpicture); // 删除被修改的图片
					res.render('message', {info:"修改成功！", type:'success', time:1, url:'/show'})
				}				
			});
		}
	});
	}else{
		var data = {
			title:showInfo.title,
			desc:showInfo.desc,
			url:showInfo.url
		};
		show.update({'_id':showInfo.id}, data, function(err, data){
			if(err){
				res.render('message', {info:"修改失败！", type:'warning', time:2, url:'/editshow/'+showInfo.id})
			}else{
				res.render('message', {info:"修改成功！", type:'success', time:1, url:'/show'})
			}				
		});
	}
}

exports.delshow = function(req, res){
	var arg = url.parse(req.url, true).query; 
	async.auto({
		specialRmshows: function (callback) {
		    special.update({'_id':arg.special}, {$pull:{'shows':arg.show}}, function(err, data){
				if(!err){
					callback(null, data);
				}else{
					callback('删除关联数据失败');
				}						
			})
		},
		delShowPicture: function (callback) {
			show.findOne({'_id':arg.show}, function(err, data){
				if(!err){
				fs.unlink('/node/app0.1/public/uploads/' + data.picture);
				callback(null, data);
				}	else {
				callback('删除失败！');
				}					
			})
		},
		delShow: ['delShowPicture', function(callback) {
			show.remove({'_id':arg.show},function(err, data){
				if(err){
					callback('删除节目失败');
				}	else{
					callback(null, '成功');
				}					
			});
		}]
	}, function(err, results) {
	    if(err){
				res.render('message',{info:err, type:'warning', time:1, url:'/show'});
			}else{
				res.redirect('/show');
			}
	});
}






/**
 * 外部函数
//  * */
// function specialRmshows(n, cb){
// 	special.update({'_id':n.special}, {$pull:{'shows':n.show}}, function(err, data){
// 		if(!err){
// 			cb(null, data);
// 		}else{
// 			cb('删除关联数据失败');
// 		}						
// 	})
// }
							
// function delShow(n, cb){
// 	show.remove({'_id':n},function(err, data){
// 		if(err){
// 			cb('删除节目失败');
// 		}	else{
// 			cb(null, '成功');
// 		}					
// 	});
// }

// function delShowPicture(n, cb){
// 	show.findOne({'_id':n}, function(err, data){
// 		if(!err){
// 			//fs.unlink('/node/app0.1/public/uploads/' + data.picture);
// 			cb(null, data);
// 		}	else {
// 			cb('删除失败！');
// 		}					
// 	})
// }
							

// 返回上一个添加的节目
exports.usePrevShowInfo = function (req, res){
	show
			.findOne()
			.sort({'addtime':-1})
			.limit(1)
			.populate('special')
			.exec(function(err, data){
				if(!err){
					res.send(data);
				}						
			});
}


