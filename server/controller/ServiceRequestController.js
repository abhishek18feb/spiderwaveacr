const ServiceRequest = require('../model/ServiceRequest');
const mongoose = require('mongoose');

exports.get_all = async (req, res, next)=>{
  console.log(req.body)
  var totalRecords = await ServiceRequest.countDocuments();
  console.log(totalRecords);
	ServiceRequest.find()
  .select('name mobile serviceId serviceTitle address status _id created')
  .sort({created: -1})
  .skip((req.query.page-1)*10)
  .limit(10)
	.exec()
	.then(result=>{
		console.log(result)
		const response={
				count: totalRecords,
				messages:result.map(result=>{
				return {
					_id: result._id,
					name: result.name,
                    mobile:result.mobile,
                    serviceId: result.serviceId,
                    serviceTitle: result.serviceTitle,
                    address:result.address,
                    status: result.status,
                    created: result.created
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

exports.add_service_request = (req, res, next)=>{
    serviceRequest = new ServiceRequest({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        mobile: req.body.mobile,
        serviceId: req.body.serviceId,
        serviceTitle: req.body.serviceTitle,
        address:req.body.address,
      })
      serviceRequest.save()
      .then(function(result){
        console.log(result)
        res.status(201).json({
            message: "Handling POST request to /ServiceRequests",
            createdServiceRequest: {
                name: result.name,
                mobile: result.mobile,
                address:result.address,
                status: result.status,
                created: result.created,
                _id: result._id
            }
        });
      }).catch(function(err){
        if (err){ 
            return res.status(500).json({
                error: err
            });
        }
      })
}

exports.get_single_service_request = (req, res, next)=>{
    console.log(req.params.ServiceRequestId)
    ServiceRequest.findOne({_id: req.params.ServiceRequestId}).select('name mobile serviceId serviceTitle address status _id created')
    .exec()
    .then(result=>{
      if(result){
        console.log(result)
        return res.status(202).json({
            message: 'Handling GET request to /ServiceRequest',
            result
        })
      }else{
        console.log('err');
      }
    })
    .catch(err=>{
      return res.status(402).json({
        error: "Please check your input and try again"
      })
    })
}
  

exports.update_service_request = (req, res, next)=>{
    ServiceRequest.updateOne({_id: req.params.ServiceRequestId}, {$set: req.body})
    .exec()
    .then(result=>{
      console.log(result)
      return res.status(200).json({
        message: 'ServiceRequest Updated Successfully',
        result
      })
    })
    .catch(err=>{
       return res.status(402).json({
          error: "Please check your input and try again"
        })
    })
}

exports.delete_ServiceRequest = (req, res, next)=>{
    ServiceRequest.remove({_id: req.params.ServiceRequestId})
    .exec()
    .then(result=>{
        res.status(200).json({
            message: 'ServiceRequest Deleted Successfully',
        });
    })
    .catch(err=>{
        res.status(500).json({
            error: err
        });
    });
}