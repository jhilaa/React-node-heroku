const sql = require("./db.js");

// constructeur
const Projet = function (Project) {
  this.title = Project.title;
  this.description = Project.description;
  this.snapshot = Project.snapshot;
  this.keywords = Project.keywords;
};

Projet.findById = (id, result) => {
  sql.query(`SELECT id,  FROM projects WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found projects: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Projet with the id
    result({ kind: "not_found" }, null);
  });
};

Projet.findKeywordsByProjectId = (id, result) => {
  sql.query(
    `SELECT * FROM keywords INNER JOIN link_projects_keywords on keywords.id=link_projects_keywords.id_keyword WHERE link_projects_keywords.id_project = ${id}`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found keywords: ", res);
        result(null, res);
        return;
      }

      // not found Projet with the id
      result({ kind: "not_found" }, null);
    }
  );
};

Projet.findKeywords = (result) => {
  sql.query(
    `SELECT * FROM keywords INNER JOIN link_projects_keywords on keywords.id=link_projects_keywords.id_keyword`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found keywords: ", res);
        result(null, res);
        return;
      }

      // not found Projet with the id
      result({ kind: "not_found" }, null);
    }
  );
};

Projet.getAll = (title, result) => {
  let query =
    "SELECT p.`id` as project_id, p.`title`, p.`description`, p.`snapshot`, k.`id` as keyword_id, k.`keyword`, k.`color` FROM `projects` as p LEFT OUTER JOIN `link_projects_keywords` as lpk on p.`id` = lpk.`id_project` left outer join `keywords` as k on lpk.`id_keyword` = k.`id` ORDER BY p.`id`, k.`id`;";
  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }
  console.log(query);

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

module.exports = Projet;
