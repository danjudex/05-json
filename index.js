const fs = require("fs/promises");

// const timeout = (ms) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//       console.log("TIMER");
//     }, ms);
//   });

const main = async () => {
  const fileBuffer = await fs.readFile("sample.json");
  const obj = JSON.parse(fileBuffer.toString());

  console.log(obj.firstName);
  console.log(obj.address.city);
  console.log(obj.phoneNumbers[0].number);
};

main();
