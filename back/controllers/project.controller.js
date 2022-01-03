const Projet = require("../models/project.model.js");

// Retrieve all Projects from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.query.title;
  console.log(req.query.title);

  Projet.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    else res.send(data);
  });
};

// Find a single Projet with a id
exports.findOne = (req, res) => {
  Projet.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Projet with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Projet with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Find keywords for a single projet with a id
exports.findKeywordsByProject = (req, res) => {
  Projet.findKeywordsByProjectId(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Projet with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Projet with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Find keywords for all projet
exports.findKeywords = (req, res) => {
  Projet.findKeywords((err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No data found.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving keywords " + req.params.id,
        });
      }
    } else res.send(data);
  });
};
