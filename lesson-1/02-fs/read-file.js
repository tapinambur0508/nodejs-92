// const fs = require("node:fs");
// const fs = require("node:fs").promises;
const fs = require("node:fs/promises");

console.log("Before");

// fs.readFile("read.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     throw err;
//   }

//   console.log(data.toUpperCase());
// });

// fs.promises
//   .readFile("read.txt", { encoding: "utf-8" })
//   .then((data) => console.log(data.toUpperCase()))
//   .catch((error) => console.error(error));

fs.readFile("read.txt", { encoding: "utf-8" })
  .then((data) => console.log(data.toUpperCase()))
  .catch((error) => console.error(error));

console.log("After");
