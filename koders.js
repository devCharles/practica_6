const { init } = require("./utils");
const commands = require("./commands");

const command = process.argv[2];

init();

if (commands[command]) {
  commands[command]();
  process.exit(0);
}

console.error("Command not found");
