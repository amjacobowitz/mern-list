var mongoose = require('mongoose')

var taskSchema = mongoose.Schema({
	description: String
});



module.exports = mongoose.model('Task', taskSchema);
