const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
	_id:mongoose.Schema.Types.ObjectId,
	name: {type:String, Require:true},
	email: {type:String, Require:true},
	subject: {type:String, Require:true},
    comment: {type:String, Require:true},
    status:{type:String, enum: ['New', 'View', 'Replied'], default: 'New'}
});

module.exports = mongoose.model('Contact', contactSchema);