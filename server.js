var express = require('express')
var app = express();
var path = require('path')
var engine = require('react-engine')
var port = 3000

var server = app.listen(port, function(){
	var port = server.address().port
})

var db = require('./models/db')
var model_tasks = require('./models/task')


var route_tasks = require('./routes/task');
app.use('/', route_tasks);



console.log('Listening at port: ' + port)

// User for  ejs
// app.set('view engine', 'ejs');

var engineOptions = {
	reactRoutes: '/public/javascripts/todo.js'
}

app.engine('.jsx', engine.server.create(engineOptions))
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx')
app.set('view', engine.expressView)


app.use(express.static(path.join(__dirname, 'public')));
