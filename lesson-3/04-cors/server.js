const fs = require("node:fs/promises");
const path = require("node:path");

const cors = require("cors");
const express = require("express");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

app.get("/books", async (req, res) => {
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
