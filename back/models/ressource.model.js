const sql = require("./db.js");

// constructeur
const Ressource = function (Ressource) {
  this.title = Ressource.title;
  this.description = Ressource.description;
  this.snapshot = Ressource.snapshot;
  this.keywords = Ressource.keywords;
};

Ressource.findById = (id, result) => {
  sql.query(`SELECT id,  FROM ressources WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found ressoource: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Ressource with the id
    result({ kind: "not_found" }, null);
  });
};

Ressource.findKeywordsByRessourceId = (id, result) => {
  sql.query(
    `SELECT * FROM keywords INNER JOIN link_ressources_keywords on keywords.id=link_ressources_keywords.id_keyword WHERE link_ressourcess_keywords.id_ressource = ${id}`,
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

      // not found Ressource with the id
      result({ kind: "not_found" }, null);
    }
  );
};

Ressource.findKeywords = (result) => {
  sql.query(
    `SELECT * FROM keywords INNER JOIN link_ressources_keywords on keywords.id=link_ressources_keywords.id_keyword`,
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

      // not found Ressource with the id
      result({ kind: "not_found" }, null);
    }
  );
};

Ressource.getAll = (title, result) => {
  let query =
    "SELECT p.`id` as ressource_id, p.`title`, p.`description`, p.`snapshot`, k.`id` as keyword_id, k.`keyword`, k.`color` FROM `ressources` as p LEFT OUTER JOIN `link_ressources_keywords` as lpk on p.`id` = lpk.`id_ressource` left outer join `keywords` as k on lpk.`id_keyword` = k.`id` ORDER BY p.`id`, k.`id`;";
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

module.exports = Ressource;
