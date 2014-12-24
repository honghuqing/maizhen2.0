
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var admin = require('./routes/admin');
var http = require('http');
var path = require('path');
var middle = require('./model/middle.js');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/special', middle.islogin, admin.special);
app.get('/addspecial', admin.addspecial);
app.post('/addspecial', admin.insertspecial);
app.get('/reg',routes.reg);
app.post('/adduser', admin.adduser);
app.post('/dologin', admin.dologin);
app.get('/show/:id?', middle.islogin, admin.show)
app.get('/addshow', middle.islogin, admin.addshow)
app.post('/addshow', middle.islogin, admin.insertshow)
app.get('/delspecial/:id', middle.islogin, admin.delspecial);
app.get('/editspecial/:id', middle.islogin, admin.editspecial);
app.post('/updatespecial', middle.islogin, admin.updatespecial);
app.get('/delshow/:id?', middle.islogin, admin.delshow);
app.get('/editshow/:id', middle.islogin, admin.editshow);
app.post('/updateshow', middle.islogin, admin.updateshow);
app.post('/usePrevShowInfo', middle.islogin, admin.usePrevShowInfo);

app.all('*',function(req, res){
							res.send('404');
						})

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
