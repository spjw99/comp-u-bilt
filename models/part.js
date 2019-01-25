// import mongoose and set up schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// set up book schema
const partsSchema = new Schema({
  idx: {type: String},
  title: {type: String,required: true},
  category: {type: String},
  price: {type: String},
  description: {type: String},
  model_id: {type: String},
  tags: {type: String},
  link: {type: String},
  image: {type: String},
  date: {type: Date,default: Date.now}
});

// create Book model using schema
const Parts = mongoose.model("Part", partsSchema);

// export model
module.exports = Parts;
