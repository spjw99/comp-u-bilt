// import our Book model
const db = require("../models");

// export a set of methods to edit and manipulate the Book collection
module.exports = {
  createPart: function(req, res) {
    //console.log("NEED TO UNCOMMENT");
    console.log(req.body);
    db.Part
    .create(req.body)
    .then(dbPartData => res.json(dbPartData))
    .catch(err => {
      console.log(err);
      res.status(422).json(err)
    });
  },
  
  findCpusByTagId: function(req, res) {
    let condition = {category: '1'};
    if(req.params.tagId !== 'all'){
        condition['idx'] = req.params.tagId;
    }
    db.Part
      .find(condition)
      .then(dbPartData => res.json(dbPartData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  findRamsByTagId: function(req, res) {
    let condition = {category: '2'};
    if(req.params.tagId !== 'all'){
        condition['idx'] = req.params.tagId;
    }
    db.Part
      .find(condition)
      .then(dbPartData => res.json(dbPartData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  findHddsByTagId: function(req, res) {
    let condition = {category: '4'};
    if(req.params.tagId !== 'all'){
        condition['idx'] = req.params.tagId;
    }
    db.Part
      .find(condition)
      .then(dbPartData => res.json(dbPartData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  findGpusByTagId: function(req, res) {
    let condition = {category: '3'};
    if(req.params.tagId !== 'all'){
        condition['tags'] = req.params.tagId;
    }
    db.Part
      .find(condition)
      .then(dbPartData => res.json(dbPartData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  },
  findCasesByTagId: function(req, res) {
    let condition = {category: '5'};
    if(req.params.tagId !== 'all'){
        condition['tags'] = req.params.tagId;
    }
    db.Part
      .find(condition)
      .then(dbPartData => res.json(dbPartData))
      .catch(err => {
        console.log(err);
        res.status(422).json(err)
      });
  }
}