const crypto = require("node:crypto");

const express = require("express");

const movieSchema = require("./schemas/movies");

const app = express();

const jsonParser = express.json();

app.post("/movies", jsonParser, (req, res) => {
  const movie = {
    title: req.body.title,
    year: req.body.year,
    genre: req.body.genre,
  };

  const { value, error } = movieSchema.validate(movie);

  if (typeof error !== "undefined") {
    return res.status(400).send("Validation Error");
  }

  res.status(201).send({ ...value, id: crypto.randomUUID() });
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
