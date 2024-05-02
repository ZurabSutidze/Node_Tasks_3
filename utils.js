const fs = require("fs/promises");

async function Read(Path) {
  return await fs.readFile(Path, "utf-8");
}


module.exports = {
  Read,
};
