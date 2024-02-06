const fs = require("node:fs/promises");

async function main() {
  const data = await fs.readFile("unknown.txt", { encoding: "utf-8" });
  const transformedDate = data.toUpperCase();
  await fs.writeFile("mix.txt", transformedDate);
}

main().catch((error) => console.error(error));
