const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const SiteSetting = require('../model/SiteSetting');

exports.update_site_setting = (req, res, next)=>{
	
	siteSetting = {
		//_id: new mongoose.Types.ObjectId(),
		email: req.body.email,
		phone: req.body.phone,
		facebook: req.body.facebook,
		instagram: req.body.instagram,
		twitter: req.body.twitter,
		
    }
	if(req.file){
		siteSetting.logo=req.file.filename,
		siteSetting.logopath="http://localhost:3300/logo/"+req.file.filename
	}
  	
    var objectId = new mongoose.Types.ObjectId('5d4864bdb5d41f623e363e14')
    SiteSetting.findOneAndUpdate({_id: objectId}, {$set:siteSetting}, {
	  new:true,
	  upsert: true // Make this update into an upsert
	}).then(function(result){
	console.log(result)
		res.status(201).json({
		    message: "Data Updates Successfully",
		    siteSetting: {
		        email: result.email,
		        phone: result.phone,
		        facebook: result.facebook,
		        instagram: result.instagram,
		        twitter: result.twitter,
		        logo: result.logo,
		        logopath: result.logopath,
		        _id: result._id
		    }
		});
	}).catch(function(err){
	  fs.unlink('./public/logo/'+req.file.filename, function(err){
	      if (err) throw err;
	      return res.status(500).json({
	        error: err
	      });
	  })
	})
}

exports.fetch_site_setting = (req,res, next)=>{
	
	SiteSetting.findOne({}).exec()
	.then((result)=>{
		console.log(result)
		return res.status(201).json({
		    message: "Data Fetch Successfully",
		    siteSetting: {
		        email: result.email,
		        phone: result.phone,
		        facebook: result.facebook,
		        instagram: result.instagram,
		        twitter: result.twitter,
		        logo: result.logo,
		        logopath: result.logopath,
		        _id: result._id
		    }
		});
	}).catch((err)=>{
		return res.status(500).json({
		            error: err
		        });
	})
}     