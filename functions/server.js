const express = require("express");
const PATH = require("path"); //directement dans node
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 7000;
const app = express();

// new
app.use(
  cors({
    origin: `https://my-demo-node-react.herokuapp.com/`, //react's address
    credentials: true,
  })
);

app.use(express.json());
app.use(express.static("../client/build"));

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
  console.log(process.env.PORT);
  console.log(process.env.BASEURL);
  console.log(process.env.BASEURL + ":7000/api/");
  console.log("--");
});
