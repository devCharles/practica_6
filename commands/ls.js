const { getKoders } = require("../utils");

function ls() {
  const kodersList = getKoders();

  if (kodersList.length <= 0) {
    console.info("No koders found 🤷");
    process.exit(0);
  }

  kodersList.forEach((koder, idx) => {
    console.log(idx + 1, "-", koder);
  });
}

module.exports = ls;
