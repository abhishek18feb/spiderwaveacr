const Admin = require('../model/Admins');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');


exports.signup = function(req, res, next){
	//console.log('req.body')
	console.log(req.body)
	Admin.find({ email: req.body.email })
    .exec()
    .then(admin=>{
        if(admin.length>=1){
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
                   const admin = new Admin({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            name: req.body.name,
                            mobile:req.body.mobile,
                            expiresIn:"3600",
                            password: hash
                        });
                    admin.save()
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
	Admin.find({ email: req.body.email })
    .exec()
    .then(admin =>{
        //console.log(user);
        if(admin.length<1){
            return res.status(401).json({
                message: 'Admin not found, User doesn\'t exist'
            });
        }else{
            bcrypt.compare(req.body.password, admin[0].password, function(err, result) {
                if(err){
                    return res.status(401).json({
                        error:"Auth failed"
                    });
                }
                if(result){
                    result=admin[0];
                    result.password='';
                    const token = jwt.sign(
                    {
                        email: admin[0].email,
                        userId: admin[0]._id
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
                        data: admin[0]
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