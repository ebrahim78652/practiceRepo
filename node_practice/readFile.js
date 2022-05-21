const fs = require("fs/promises");

async function example() {
  try {
    const data = await fs.readFile("test.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

example();
