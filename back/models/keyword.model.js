const sql = require("./db.js");

// constructeur
const Keyword = function (Keyword) {
  this.keyword = Keyword.keyword;
  this.color = Keyword.color;
};

Keyword.createKeyword = (keyword, color, result) => {
  let query =
    `INSERT INTO keywords (keyword, color) values (` +
    keyword +
    `, ` +
    color +
    `);`;
  console.log(query);
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      sql.commit(function (err) {
        console.log("Commiting transaction.....");
        if (err) {
          return sql.rollback(function () {
            throw err;
          });
        } else {
          console.log("Transaction commited");
          return;
        }
      });
    }
  });
};

Keyword.findById = (id, result) => {
  sql.query(`SELECT *  FROM keywords WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found keyword: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Projet with the id
    result({ kind: "not_found" }, null);
  });
};

Keyword.getAll = (result) => {
  let query = "SELECT * FROM `keywords` ORDER BY `id`";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

//--------------------------
/*
Keyword.create = (newKeyword, result) => {
  sql.query("INSERT INTO keywords SET ?", newKeyword, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created keyword: ", { id: res.insertId, ...newKeyword });
    result(null, { id: res.insertId, ...newKeyword });
  });
};
*/
//--------------------------------
Keyword.updateById = (id, keyword, result) => {
  sql.query(
    "UPDATE keyword SET keyword = ?, color = ? WHERE id = ?",
    [keyword.keyword, keyword.color, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Keyword with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated keyword: ", { id: id, ...keyword });
      result(null, { id: id, ...keyword });
    }
  );
};

Keyword.remove = (id, result) => {
  sql.query("DELETE FROM keywords WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Keyword with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted keyword with id: ", id);
    result(null, res);
  });
};

module.exports = Keyword;
