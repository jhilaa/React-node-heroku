const Keyword = require("../models/Keyword.model.js");

// Retrieve all keywords from the database
exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  console.log(req.body);
  // create the keyword
  const keyword = new Keyword({
    keyword: req.params.keyword,
    color: req.params.color,
  });
  // put the keyword in the database
  Keyword.createKeyword(keyword, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while creating keywords.",
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Keyword.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving keywords.",
      });
    else res.send(data);
  });
};

// Find a single Keyword with a id
exports.findOne = (req, res) => {
  Keyword.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Keyword with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Keyword with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Find keywords for a single keyword with a id
exports.findKeywordsByProject = (req, res) => {
  Keyword.findKeywordsByProjectId(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Keyword with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Keyword with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};
