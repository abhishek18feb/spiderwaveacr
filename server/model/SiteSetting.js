const mongoose = require('mongoose');

const siteSettingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    logo: {type:String},
    logopath:{type:String},
    email:{type:String, Required:true},
    phone:{type:String, Required:true},
    facebook:{type:String},
    instagram:{type:String},
    twitter:{type:String}
});



module.exports = mongoose.model('SiteSetting', siteSettingSchema);