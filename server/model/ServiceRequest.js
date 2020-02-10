const mongoose = require('mongoose');

const ServiceRequestSchema = mongoose.Schema({
	_id:mongoose.Schema.Types.ObjectId,
	name: {type:String, Require:true},
	mobile: {type:String, Require:true},
	serviceId: {type:String, Require:true},
	serviceTitle: {type:String, Require:true},
	address: {type:String, Require:true},
	created: {
		type: Date,
		// `Date.now()` returns the current unix timestamp as a number
		default: Date.now
	  },
    status:{type:String, enum: ['New', 'Viewed', 'Replied'], default: 'New'}
});

module.exports = mongoose.model('ServiceRequest', ServiceRequestSchema);