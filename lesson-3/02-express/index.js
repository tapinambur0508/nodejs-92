const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(req.method);
  console.log(req.url);

  res.send("Home");
});

app.get("/movies", (req, res) => {
  res.send("Movies");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
