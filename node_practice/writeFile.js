const fs = require("fs/promises");

async function example() {
  try {
    await fs.writeFile("./test.txt", "inda pode3", { flag: "a+" });
  } catch (err) {
    console.log(err);
  }
}

example();
