const Service = require('../model/Service');
const mongoose = require('mongoose');

exports.get_all = (req, res, next)=>{
	Service.find()
	.select('title meta_keywords meta_desc content _id')
	.exec()
	.then(result=>{
		console.log(result)
		const response={
				count: result.length,
				service:result.map(result=>{
				return {
					_id: result._id,
					title: result.title,
					meta_keywords:result.meta_keywords,
					meta_desc: result.meta_desc,
					content: result.content
				}
			})
		}
		return res.status(201).json({
			message:"Data fetched successfully",
			data:response
		})
	}).catch(err=>{
		return res.status(500).json({
			error:err
		})
	})
}

exports.addService = (req,res,next)=>{
	console.log(req.body)
	Service.find({title: req.body.title})
	.exec()
	.then(service=>{
		if(service.length){
			return res.status(409).json({
				message: "You already added this service"
			})
		}else{
			const service = new Service({
				_id:new mongoose.Types.ObjectId,
				title:req.body.title,
				meta_keywords:req.body.meta_keywords,
				meta_desc:req.body.meta_desc,
				content:req.body.content
			})
			service.save().then(result=>{
				return res.status(201).json({
					message:"Service saved successfully",
					data:{
						title:result.title,
						mets_keywords:result.meta_desc,
						meta_desc: result.meta_desc,
						content:result.content,
						_id:result._id
					}
				})

			})
		}
	})
}

exports.get_single_service = (req, res, next) => {
  var id = req.params.serviceId;
  console.log(id);
  Service.findById({"_id":id})
  .select("title meta_keywords meta_desc content _id")
  .exec()
  .then(doc =>{
      console.log(doc)
      if(doc){
          res.status(201).json({
              message: "Handling GET request to /products/:id",
              data: doc,
          });
      }else{
          res.status(404).json({
               message: "No valid entry found for this provided id",
          });
      }
  }).catch(err=>{ res.status(500).json({ error:err}); });
}

exports.update_service = (req, res, next) => {
  const id = req.params.serviceId; 
  console.log(id)
  console.log(req.body)
  Service.update({"_id":id}, {$set: req.body})
  .exec()
  .then(doc=>{
      res.status(200).json({
          message: "Service with "+id+" updated",
      })
  })
  .catch(err=>{
      res.status(500).json({
          message: "There was an error in updating the service",
          error: err
      })
  });
}

exports.delete_service = (req, res, next) => {
  const id = req.params.serviceId;
  console.log(id);
  Service.remove({_id: id})
  .exec()
  .then(result=>{
      res.status(200).json({
          message: 'Service Deleted Successfully',
      });
  })
  .catch(err=>{
      res.status(500).json({
          error: err
      });
  });
}

exports.check_unique = (req, res, next) =>{
	console.log(req.body)
	Service.countDocuments(req.body)
	//Cms.countDocuments({$and:{_id:{$ne:req.body._id}, $or:{page_name:req.body.page_name, title:req.body.title}}})
	.exec()
	.then(result=>{
		console.log(result);
		res.status(200).json({
          	result: result,
      	});
	})
	.catch(err=>{
		res.status(500).json({
          	error: err
      	});
	})
}