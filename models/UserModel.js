var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema(
    { 
       Refno:Number,
       Qty:String,
       Amount:String,
       Status:String,
       Name:String,
       Date:String

    },
    {versionKey : false});

var UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;