const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
	_id:mongoose.Schema.Types.ObjectId,
	name: {type:String, Require:true},
	mobile: {type:String, Require:true},
	email: {type:String, Require:true},
	subject: {type:String, Require:true},
	comment: {type:String, Require:true},
	created: {
		type: Date,
		// `Date.now()` returns the current unix timestamp as a number
		default: Date.now
	  },
    status:{type:String, enum: ['New', 'Viewed', 'Replied'], default: 'New'}
});

module.exports = mongoose.model('Contact', contactSchema);