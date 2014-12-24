var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/maizhenzhidao');
var schema = mongoose.Schema;

var adminSchema = new schema({
  username:String,  // 管理员账号
  password:String	// 管理员密码
});

var admin = mongoose.model('admin',adminSchema);

var specialSchema = new schema({
  title:String,  // 专辑标题
  desc:String,	// 专辑描述
  picture:String,// 专辑图
  cai:{type:Number,default:0}, //专辑踩
  zan:{type:Number,default:0}, // 专辑赞
  comment:[{user:String,time:String,content:String}], // 专辑评论
  shows:[{type:schema.Types.ObjectId, ref:'show'}], 
  author:String, // 专辑作者
	addtime:String
});

var special = mongoose.model('special',specialSchema);

var showSchema = new schema({
  title:String,  // 节目标题
  desc:String, // 节目描述
	category:String, // 节目分类
	tags:[{type:String}], // 节目标签
	pushinfo:String, // 节目发布时推送的消息
	author:String, // 节目作者
  picture:String, // 节目图片
	addtime:String,
	special:{type:schema.Types.ObjectId, ref:'special'},
  comment:[{user:String,time:String,content:String}],
  url:String // 节目地址
});

var show = mongoose.model('show',showSchema);


var userSchema = new schema({
  username:String,   // 用户账号
  password:String, 	// 用户密码
  like:[{type:schema.Types.ObjectId, ref:'special'}], //用户收藏的专辑
  subscribe:[{type:schema.Types.ObjectId, ref:'special'}]  // 用户订阅的专辑
});

var user = mongoose.model('user',userSchema);
