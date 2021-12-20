//npm run client
const express = require("express");
const path = require("path");
require("dotenv").config();

const PORT = process.env.PORT || 5500;
const app = express();

app.use(express.json());
app.use(express.static("./client/build"));

app.get("/api/youtube", (req_, res) => {
  res.send({
    msg: "retour de l'api",
  });
});

app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Le serveur est lancé sur le port : ${PORT}`);
});
