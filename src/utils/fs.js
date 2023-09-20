const fs = require("fs");

const path = require("path");

const readFile = (fileName) => {
  return JSON.parse(fs.readFileSync(path.join("db", fileName + ".json")));
};

const writeFile = (fileName, content) => {
  fs.writeFileSync(
    path.join(path.join("db", fileName + ".json")),
    JSON.stringify(content, null, 2)
  );
};

module.exports = {
  readFile,
  writeFile,
};
