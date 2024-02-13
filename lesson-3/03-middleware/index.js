const fs = require("node:fs/promises");
const path = require("node:path");

const express = require("express");

const app = express();

function checkAuth(req, res, next) {
  const apiKey = req.query["api-key"];

  if (apiKey !== "123456") {
    return res.status(401).send("Please provide api key");
  }

  next();
}

// app.use("/books", checkAuth);

// app.use((req, res, next) => {
//   console.log("A");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("B");
//   next();
// });

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/books", checkAuth, async (req, res) => {
  const filePath = path.join(__dirname, "books.json");

  try {
    const data = await fs.readFile(filePath, { encoding: "utf-8" });
    const books = JSON.parse(data);

    res.send(books);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/books", (req, res) => {
  res.send("Book created successfully");
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
