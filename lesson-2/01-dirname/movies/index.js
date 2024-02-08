const fs = require("node:fs/promises");
const path = require("node:path");

async function readMovies() {
  // const filePath = path.join(__dirname, "../data/movies.txt");
  const filePath = path.join(__dirname, "..", "data", "movies.txt");
  const data = await fs.readFile(filePath, { encoding: "utf-8" });

  return data;
}

module.exports = {
  readMovies,
};
