const { getKoders, saveKoders } = require("../utils");
const ls = require("./ls");

function add() {
  const kodersList = getKoders();
  const newKoder = process.argv[3];

  if (!newKoder) {
    console.error("Please provide a koder name");
    process.exit(2);
  }

  kodersList.push(newKoder);

  saveKoders(kodersList);

  console.info("Koder added successfully 🎉");

  ls();
}

module.exports = add;
