const User = require('../model/Users');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const uuidv4 = require('uuid/v4');
const emailTemplate = require('../middleware/forgot-email');
const path = require('path');
const configuration = require('../config/constant');

exports.signup = function(req, res, next){
	//console.log('req.body')
	//console.log(req.body)
	User.find({ email: req.body.email })
    .exec()
    .then(user=>{
        if(user.length>=1){
            return res.status(409).json({
                message: "Mail Exists"
            });
        }else{
            bcrypt.hash(req.body.password, 10, function(err, hash) {
               if(err){
                   return res.status(500).json({
                        error: err
                   })
               }
               else{
                   const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            name: req.body.name,
                            mobile:req.body.mobile,
                            //expiresIn:"3600",
                            password: hash
                        });
                    user.save()
                    .then(result => {
                        result.password='';
                        const token = jwt.sign(
                        {
                            email: result.email,
                            userId: result._id
                        },
                        "secret",
                        {
                          expiresIn: "1h"
                        }
                        );
                        //console.log(data);
                        return res.status(200).json({
                            message: 'Auth Successful',
                            token: token,
                            expiresIn:"3600",
                            data: result
                        });
                    })
                    .catch(err=>{
                                console.log(err)
                                res.status(500).json({
                                    error: err
                                });
                            });
               }
            });
        }
    });
}

exports.login = function(req, res, next){
	User.find({ email: req.body.email })
    .exec()
    .then(user =>{
        //console.log(user);
        if(user.length<1){
            return res.status(401).json({
                message: 'User not found, User doesn\'t exist'
            });
        }else{
            bcrypt.compare(req.body.password, user[0].password, function(err, result) {
                if(err){
                    return res.status(401).json({
                        error:"Auth failed"
                    });
                }
                if(result){
                    result=user[0];
                    result.password='';
                    const token = jwt.sign(
                    {
                        email: user[0].email,
                        userId: user[0]._id
                    },
                    "secret",
                    {
                      expiresIn: "1h"
                    }
                    );
                    return res.status(200).json({
                        message: 'Auth Successful',
                        token: token,
                        expiresIn:"3600",
                        data: user[0]
                    });
                }
                return res.status(401).json({
                    error:"Auth failed"
                });
            });
        }
    })
    .catch(err=>{
        res.status(500).json({
            error: err
        });
    });
}
exports.forgot_password = function(req, res, next){
    User.find({ email: req.body.email })
    .exec()
    .then(user =>{
        console.log(user[0])
        if(user.length){
            const resetToken = uuidv4();
            User.updateOne({email: req.body.email },{resetToken:resetToken})
            .then(response=>{
                let resetUrl = configuration.Appurl+'/user/reset-password?reset='+resetToken
                emailTemplate.sendForgotEmail(user[0].name,req.body.email,resetUrl);
                return res.status(200).json({
                    message: 'Please check your email',
                    success:true
                }); 
            })
            .catch(err=>{
                return res.status(401).json({
                    message: 'Something went wrong',
                    success:false
                });  
            });
        }else{
            return res.status(401).json({
                message: 'User not found, User doesn\'t exist',
                success:false
            });
        }
    })
    .catch(err=>{
        res.status(500).json({
            error: err
        });
    });


    
}

exports.reset_password  = (req, res,next)=>{
    console.log(req.body)
    if(req.body.password==req.body.confirm_password){
       User.findOne({resetToken: req.body.resetToken})
        .exec()
        .then(user=>{
            if(user){
                bcrypt.hash(req.body.password, 10, function(err, hash) {
                    if(err){
                       return res.status(500).json({
                            error: err
                       })
                    }
                    else{
                       console.log(user);
                        User.updateOne({email: user.email },{$set:{password:hash, resetToken:''}})
                        .then(response=>{
                            return res.status(200).json({
                                message: 'Password updated successfully',
                                success:true
                            }); 
                        })
                        .catch(err=>{
                            return res.status(401).json({
                                message: 'Something went wrong',
                                success:false
                            });  
                        });
                   }
               })
            }
        })
        .catch(error=>{
            res.status(500).json({
                error: err
            });
        }) 
    }else{
        res.status(500).json({
            message: 'Both Password should be equal'
        });
    }
    
}
