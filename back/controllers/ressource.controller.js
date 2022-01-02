const Ressource = require("../models/ressource.model.js");

// Retrieve all Projects from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.query.title;
  console.log(req.query.title);

  Ressource.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    else res.send(data);
  });
};

// Find a single Ressource with a id
exports.findOne = (req, res) => {
  Ressource.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Ressource with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Ressource with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Find keywords for a single ressource with a id
exports.findKeywordsByRessource = (req, res) => {
  Ressource.findKeywordsByRessourceId(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Ressource with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Ressource with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Find keywords for all ressource
exports.findKeywords = (req, res) => {
  Ressource.findKeywords((err, data) => {
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
