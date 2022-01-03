const express = require("express");
//const PATH = require("path"); //directement dans node
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 7000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("../front/build"));

app.get("/api/test", (req, res) => {
  res.send({
    return: "waiting for instructions",
  });
});

require("./routes/project.routes.js")(app);
require("./routes/ressource.routes.js")(app);
require("./routes/keyword.routes.js")(app);

app.listen(PORT, () => {
  console.log(`le serveur est lancé sur le port : ${PORT}`);
});
