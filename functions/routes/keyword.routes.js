module.exports = (app) => {
  const keywords = require("../controllers/keyword.controller.js");
  var router = require("express").Router();

  router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  // Create a new keywords
  app.post("/api/keywords", (req, res) => {
    keywords.create(req, res);
  });

  // Retrieve all keywords
  app.get("/api/keywords", keywords.findAll);

  // Retrieve a single keyword with id
  app.get("/api/keywords/:id", keywords.findOne);

  // Update a keyword with id
  //router.put("/api/keywords/:id", keywords.update);

  // Delete a Ressource with id
  //router.delete("/:id", ressources.delete);

  // Delete all ressources
  //router.delete("/", ressources.deleteAll);

  //app.use("/api/ressources", ressources.findAll);
};
