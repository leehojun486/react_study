const express = require("express");
const app = express();
const PORT = process.env.PORT || 8091;
const db = require("./config/db");

app.get("/", (req, res) => {
  res.send("welcome to blog");
});

app.get("/api/test", (req, res) => {
  db.querry("select * from B_ITEM", (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
      res.send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log("server on : http://localhost:${PORT}/");
});
