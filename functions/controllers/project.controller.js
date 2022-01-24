const Projet = require("../models/project.model.js");

// Retrieve all Projects from the database (with condition).
exports.findAll = (req, res) => {
  Projet.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving project.",
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
exports.findProjects = (req, res) => {
  Projet.findProjects((err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `No data found.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving projects " + req.params.id,
        });
      }
    } else res.send(data);
  });
};
