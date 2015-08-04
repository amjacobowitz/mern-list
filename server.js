var express = require('express')
var app = express();
var path = require('path')
var port = 3000

var server = app.listen(port, function(){
	var port = server.address().port
})

var db = require('./models/db')
var tasks = require('./models/task')
var tasks = require('./routes/task');

console.log('Listening at port: ' + port)

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', tasks);