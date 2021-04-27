const fs = require("fs/promises");

const main = async () => {
  const json = await fs.readFile("sample.json");
  console.log(json);
};

main();

console.log("END");
