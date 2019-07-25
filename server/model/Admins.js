const mongoose = require('mongoose');

const adminsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type:String, Required:true},
    email:{type:String, Required:true},
    mobile:{type:String, Required:true},
    password:{type:String, Required:true}
});



module.exports = mongoose.model('Admin', adminsSchema);