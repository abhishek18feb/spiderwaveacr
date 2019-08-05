const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const SiteSetting = require('../model/SiteSetting');

exports.update_site_setting = (req, res, next)=>{
	console.log(req.file);
  	console.log(req.body);

  	siteSetting = new SiteSetting({
		_id: new mongoose.Types.ObjectId(),
		email: req.body.email,
		phone: req.body.phone,
		facebook: req.body.facebook,
		instagram: req.body.instagram,
		twitter: req.body.twitter,
		logo: req.file.filename,
		logopath: "http://localhost:3300/logo/"+req.file.filename
    })
	siteSetting.save()
	.then(function(result){
	console.log(result)
	res.status(201).json({
	    message: "Handling POST request to /products",
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