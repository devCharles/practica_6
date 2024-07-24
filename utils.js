const fs = require("fs");
const { dbName } = require("./constants");

function init() {
  const dbExists = fs.existsSync(dbName);

  if (!dbExists) {
    fs.writeFileSync(dbName, JSON.stringify([]), "utf8");
  }
}

function getKoders() {
  const fileContent = fs.readFileSync(dbName, "utf8");
  const koders = JSON.parse(fileContent);
  return koders;
}

function saveKoders(koders) {
  fs.writeFileSync(dbName, JSON.stringify(koders), "utf8");
}

module.exports = {
  init,
  getKoders,
  saveKoders,
};
