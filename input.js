let connection;
const { text } = require('./constants');

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding(text);
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = (button) => {
  const stdout = process.stdout;

  // CTRL-C to quit the game
  if (button === '\u0003') {
    stdout.write("\nYou have quit. You are a quitter.\n");
    process.exit();
  }

  // Movement buttons
  if (button === 'w') {
    connection.write("Move: up");
  }
  if (button === 's') {
    connection.write("Move: down");
  }
  if (button === 'a') {
    connection.write("Move: left");
  }
  if (button === 'd') {
    connection.write("Move: right");
  }

  // Words to write on the server
  if (button === 'j') {
    connection.write("Say: Hey");
  }
  if (button === 'k') {
    connection.write("Say: POG");
  }
  if (button === 'l') {
    connection.write('Say: Huh');
  }
  if (button === 'h') {
    connection.write('Say: Hi Alex')
  }
};


module.exports = { setupInput };