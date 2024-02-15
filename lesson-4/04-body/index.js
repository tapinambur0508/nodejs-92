const crypto = require("node:crypto");

const express = require("express");

const app = express();

// app.use(express.json());

const jsonParser = express.json();

console.log(jsonParser.toString());

app.post("/movies", jsonParser, (req, res) => {
  const { title, year, genre } = req.body;

  res.status(201).send({ id: crypto.randomUUID(), title, year, genre });
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
