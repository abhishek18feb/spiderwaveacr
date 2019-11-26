const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type:String, Required:true},
    email:{type:String, Required:true},
    mobile:{type:String, Required:true},
    password:{type:String, Required:true},
    resetToken:{type:String}
});



module.exports = mongoose.model('User', userSchema);