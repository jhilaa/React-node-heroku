module.exports = (app) => {
  const ressources = require("../controllers/ressource.controller.js");
  var router = require("express").Router();

  router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  // Create a new Ressource
  //router.post("/", ressources.create);

  // Retrieve all ressources
  app.get("/api/ressources", ressources.findAll);

  // Retrieve all published ressources
  //router.get("/published", ressources.findAllPublished);

  // Retrieve a single Ressource with id
  app.get("/api/ressources/:id", ressources.findOne);

  // Retrieve keywords for a single Ressource with id
  app.get("/api/ressources/:id/keywords", ressources.findKeywordsByRessource);

  // Update a Ressource with id
  //router.put("/:id", ressources.update);

  // Delete a Ressource with id
  //router.delete("/:id", ressources.delete);

  // Delete all ressources
  //router.delete("/", ressources.deleteAll);

  //app.use("/api/ressources", ressources.findAll);
};
