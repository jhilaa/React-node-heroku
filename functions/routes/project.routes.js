module.exports = (app) => {
  const projects = require("../controllers/project.controller.js");
  var router = require("express").Router();

  router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  // Create a new Project
  //router.post("/", projects.create);

  // Retrieve all projects
  app.get("/api/projects", projects.findAll);

  // Retrieve all published projects
  //router.get("/published", projects.findAllPublished);

  // Retrieve a single Project with id
  app.get("/api/projects/:id", projects.findOne);

  // Retrieve keywords for a single Project with id
  app.get("/api/projects/:id/keywords", projects.findKeywordsByProject);

  // Update a Project with id
  //router.put("/:id", projects.update);

  // Delete a Project with id
  //router.delete("/:id", projects.delete);

  // Delete all projects
  //router.delete("/", projects.deleteAll);

  app.use("/api/projects", router);
};
