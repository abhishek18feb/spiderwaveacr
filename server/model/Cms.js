const mongoose = require('mongoose');

const cmsSchema = mongoose.Schema({
	_id:mongoose.Schema.Types.ObjectId,
	page_name: {type:String, Require: true},
	page_slug: {type:String, Require: true},
	title: {type:String, Require:true},
	meta_keywords: {type:String, Require:true},
	meta_desc: {type:String, Require:true},
	content: {type:String, Require:true}
});

module.exports = mongoose.model('Cms', cmsSchema);