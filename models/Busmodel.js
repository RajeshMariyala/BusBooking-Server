var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BusSchema = new Schema(
    { 
        Busid:Number,
        BusNo:Number,
        BusName:String,

    },
    {versionKey : false});

var BusModel = mongoose.model("buslist", BusSchema);

module.exports = BusModel;