const Cms = require('../model/Cms');
const mongoose = require('mongoose');

exports.get_all = (req, res, next)=>{
	Cms.find()
	.select('page_name title meta_keywords meta_desc content _id')
	.exec()
	.then(result=>{
		console.log(result)
		const response={
				count: result.length,
				cms:result.map(result=>{
				return {
					page_name:result.page_name,
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

exports.addCms = (req,res,next)=>{
	Cms.find({page_name: req.body.page_name})
	.exec()
	.then(cms=>{
		if(cms.length){
			return res.status(409).json({
				message: "You already added this cms"
			})
		}else{
			let pageSlug=req.body.page_name.split(" ").join("-").split(" ");
			pageSlug=String(pageSlug).toLowerCase();
			const cms = new Cms({
				_id:new mongoose.Types.ObjectId,
				page_name:req.body.page_name,
				page_slug:pageSlug,
				title:req.body.title,
				meta_keywords:req.body.meta_keywords,
				meta_desc:req.body.meta_desc,
				content:req.body.content
			})
			cms.save().then(result=>{
				return res.status(201).json({
					message:"Cms saved successfully",
					data:{
						page_name:result.page_name,
						page_slug:result.page_slug,
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

exports.get_single_cms = (req, res, next) => {
  var id = req.params.cmsId;
  console.log(id);
  Cms.findById({"_id":id})
  .select("page_name title meta_keyword meta_desc content _id")
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

exports.update_cms = (req, res, next) => {
  const id = req.params.cmsId;
  console.log(id)
  console.log(req.body)
  Cms.update({"_id":id}, {$set: req.body})
  .exec()
  .then(doc=>{
      res.status(200).json({
          message: "Cms with "+id+" updated",
      })
  })
  .catch(err=>{
      res.status(500).json({
          message: "There was an error in updating the product",
          error: err
      })
  });
}

exports.delete_cms = (req, res, next) => {
  const id = req.params.cmsId;
  console.log(id);
  Cms.remove({_id: id})
  .exec()
  .then(result=>{
      res.status(200).json({
          message: 'Cms Deleted Successfully',
      });
  })
  .catch(err=>{
      res.status(500).json({
          error: err
      });
  });
}

exports.check_unique = (req, res, next) =>{
	//console.log(req.body)
	Cms.countDocuments(req.body)
	.exec()
	.then(result=>{
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