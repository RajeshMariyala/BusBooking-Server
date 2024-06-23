var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookingSchema = new Schema(
    { 
        Busid:Number,
        Availability:String,
        Bus:String,
        Date:String,
        Departure:String,
        ETA:String,
        Location:String,
        Price:String
    },
    {versionKey : false});

var BookModel = mongoose.model("Book", BookingSchema);

module.exports = BookModel;
