const fs = require("node:fs/promises");

fs.appendFile("append.txt", "I like it\n")
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
