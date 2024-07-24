const { getKoders, saveKoders } = require("../utils");
const ls = require("./ls");

function rm() {
  const kodersList = getKoders();
  const koderToRemove = process.argv[3];

  if (!koderToRemove) {
    console.error("Please provide a koder name to remove");
    process.exit(3);
  }

  const exists = kodersList.find(
    (koder) => koder.toLowerCase() === koderToRemove.toLowerCase()
  );

  if (!exists) {
    console.error("Koder not found");
    process.exit(4);
  }

  const kodersListFiltered = kodersList.filter(
    (koder) => koder.toLowerCase() !== koderToRemove.toLowerCase()
  );

  saveKoders(kodersListFiltered);

  console.info("Koder removed successfully 🎉");

  ls();
}

module.exports = rm;
