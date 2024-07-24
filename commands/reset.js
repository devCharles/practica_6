const { saveKoders } = require("../utils");

function reset() {
  saveKoders([]);

  console.info("Koders list reset successfully 🎉");
}

module.exports = reset;
