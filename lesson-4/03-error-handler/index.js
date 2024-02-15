const fs = require("node:fs/promises");
const path = require("node:path");

const express = require("express");

const app = express();

app.get("/users", async (req, res, next) => {
  try {
    const data = await fs.readFile(path.join(__dirname, "users.json"), "utf-8");

    res.send(JSON.parse(data));
  } catch (error) {
    next(error);
  }
});

app.get("/movies", async (req, res, next) => {
  try {
    const data = await fs.readFile(
      path.join(__dirname, "movies.json"),
      "utf-8"
    );

    res.send(JSON.parse(data));
  } catch (error) {
    next(error);
  }
});

// Handle 404 Error
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

// Handle Application Error
app.use((error, req, res, next) => {
  console.log("HERE");
  console.error(error);
  res.status(500).send("Internal Server Error");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
