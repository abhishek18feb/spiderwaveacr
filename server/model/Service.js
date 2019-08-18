const mongoose = require('mongoose');

const serviceSchema = mongoose.Schema({
	_id:mongoose.Schema.Types.ObjectId,
	title: {type:String, Require:true},
	meta_keywords: {type:String, Require:true},
	meta_desc: {type:String, Require:true},
	content: {type:String, Require:true}
});

module.exports = mongoose.model('Service', serviceSchema);