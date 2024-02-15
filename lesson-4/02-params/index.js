const express = require("express");

const app = express();

// app.get("/movies/1", (req, res) => {
//   res.send("Get Movie 1");
// });

// app.get("/movies/2", (req, res) => {
//   res.send("Get Movie 2");
// });

// app.get("/movies/3", (req, res) => {
//   res.send("Get Movie 3");
// });

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;

  res.send(`Get Movie ${id}`);
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
