const fs = require("node:fs");
const dbName = "koders.json";

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

const command = process.argv[2];

init();

switch (command) {
  case "ls": {
    const kodersList = getKoders();

    if (kodersList.length <= 0) {
      console.info("No koders found 🤷");
      process.exit(0);
    }

    kodersList.forEach((koder, idx) => {
      console.log(idx + 1, "-", koder);
    });

    break;
  }

  case "add": {
    const kodersList = getKoders();
    const newKoder = process.argv[3];

    if (!newKoder) {
      console.error("Please provide a koder name");
      process.exit(2);
    }

    kodersList.push(newKoder);

    saveKoders(kodersList);

    console.info("Koder added successfully 🎉");
    break;
  }

  case "rm": {
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

    break;
  }

  case "reset": {
    saveKoders([]);

    console.info("Koders list reset successfully 🎉");

    break;
  }

  case "help":
    console.log(`
      Usage: koders [command]

      Commands:
        ls      List all koders
        add     Add a new koder
        rm      Remove a koder
        reset   Remove all koders
    `);
    break;

  default:
    console.error(`Command [${command}] not supported`);
    process.exit(1);
    break;
}
