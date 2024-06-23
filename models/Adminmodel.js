var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LoginSchema = new Schema(
    { 
        email :String,
        username:String,
        password: String
    },
    {versionKey : false});

var LoginModel = mongoose.model("admin", LoginSchema);

module.exports = LoginModel;
