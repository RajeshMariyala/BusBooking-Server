const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  sno:Number,
  name: String,
  from: String,
  to: String,
  type: String,
  Start:String,
  End:String,
  ac: Boolean,
  sleeper: Boolean,
  Price:String,
});

const Bus = mongoose.model("buses", busSchema);

module.exports = Bus;