var express = require('express');
var router = express.Router();
var mongoose = require('mongoose'); //mongo connection
var bodyParser = require('body-parser'); //parses information from POST
var methodOverride = require('method-override'); //used to manipulate POST, but I am not very clear how.  It essentially does the same type of rigging that was done with sinatra to fake a delete route, I believe.  Does it apply to put too?  It is certainly well named! ha.
var Task = require('../models/task')

// I copied and pasted the below middleware.  It allows me to parse bodies of requests and do deletes on the client side.  I don't believe it affects the database because mongoose is never called.
router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
      }
}))



router.route('/')
	.get(function(req, res) {
		Task.find({}, function(err, tasks){
	  	res.render('index', { tasks: tasks })
	  });
	})
	.post(function(req, res){
		var description = req.body.description

		Task.create({
			description: description
		}, function(err, task){
			if (err) {
				return console.error(err)
			} else {
				console.log('post created: ' + task)
				res.redirect('/')
			}
		})
	})

router.get('/:id/edit', function(req, res){
	Task.findById(req.params.id, function(err, task){
		res.render('edit', {task: task})
	})
})

router.route('/:id')
	.put(function(req, res){

		var description = req.body.description

		Task.findById(req.params.id, function(err, task){
			task.update({
				description: description
			}, function(err, task){
				if (err) {
					return console.error(err)
				} else {
					console.log('edited: ' + task)
					res.redirect('/')
				}
			})
		})
	})
	.delete(function(req, res){
		Task.findById(req.params.id, function(err, task){
			task.remove(function(err, task){
				if (err) {
					return console.error(err)
				} else {
					console.log('deleted: ' + task)
					res.redirect('/')
				}
			})
		})
	})


module.exports = router;


