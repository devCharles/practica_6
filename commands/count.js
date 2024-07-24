const { getKoders } = require("../utils");

function count() {
  const kodersList = getKoders();
  const kodersCount = kodersList.length;

  console.info(`Total koders: ${kodersCount}`);
}

module.exports = count;
