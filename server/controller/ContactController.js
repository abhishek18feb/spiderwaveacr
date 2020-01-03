const Contact = require('../model/Contact');
const mongoose = require('mongoose');

exports.get_all = async (req, res, next)=>{
  console.log(req.body)
  var totalRecords = await Contact.countDocuments();
  console.log(totalRecords);
	Contact.find()
  .select('name email subject status comment _id created')
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
					email:result.email,
					subject: result.subject,
          comment: result.comment,
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

exports.addContact = (req, res, next)=>{
    contact = new Contact({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        comment: req.body.comment
      })
      contact.save()
      .then(function(result){
        console.log(result)
        res.status(201).json({
            message: "Handling POST request to /contacts",
            createdContact: {
                name: result.name,
                email: result.email,
                subject: result.subject,
                comment: result.comment,
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

exports.get_single_contact = (req, res, next)=>{
    console.log(req.params.contactId)
    Contact.findOne({_id: req.params.contactId}).select('name email subject comment _id')
    .exec()
    .then(result=>{
      if(result){
        console.log(result)
        return res.status(202).json({
            message: 'Handling GET request to /contact',
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
  

exports.update_contact = (req, res, next)=>{
    Contact.updateOne({_id: req.params.contactId}, {$set: req.body})
    .exec()
    .then(result=>{
      console.log(result)
      return res.status(200).json({
        message: 'Contact Updated Successfully',
        result
      })
    })
    .catch(err=>{
       return res.status(402).json({
          error: "Please check your input and try again"
        })
    })
}

exports.delete_contact = (req, res, next)=>{
    Contact.remove({_id: req.params.contactId})
    .exec()
    .then(result=>{
        res.status(200).json({
            message: 'Contact Deleted Successfully',
        });
    })
    .catch(err=>{
        res.status(500).json({
            error: err
        });
    });
}