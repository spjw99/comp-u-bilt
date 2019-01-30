// import mongoose and set up schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// set up book schema
const computerSchema = new Schema({
  title: {type: String,required: true},
  price: {type: String},
  cpu: {type: String},
  cpu_desc: {type: String},
  ram: {type: String},
  ram_desc: {type: String},
  hdd: {type: String},
  hdd_desc: {type: String},
  gpu: {type: String},
  gpu_desc: {type: String},
  case: {type: String},
  case_desc: {type: String},
  tag: {type: String},
  link: {type: String},
  image: {type: String},
  date: {
    type: Date,
    default: Date.now
  }
});

// create Computer model using schema
const Computer = mongoose.model("Computer", computerSchema);

// export model
module.exports = Computer;
