// import mongoose and set up schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/*
{
  authors: ["Suzanne Collins"],
  description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule:",
  image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api",
  title: "The Hunger Games"
}
*/

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

// create Book model using schema
const Computer = mongoose.model("Computer", computerSchema);

// export model
module.exports = Computer;
