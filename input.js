const { connect } = require('./client')
let connection;

const setupInput = function (conn) {
  connection = conn
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);


  return stdin;
}

const handleUserInput = (button) => {
  const stdout = process.stdout;
  if (button === '\u0003') {
    stdout.write("\nYou have quit. You are a quitter.\n")
    process.exit();
  }
  if (button === 'w') {
    connection.write("Move: up")
  }
  if (button === 's') {
    connection.write("Move: down")
  }
  if (button === 'a') {
    connection.write("Move: left")
  }
  if (button === 'd') {
    connection.write("Move: right")
  }
};


module.exports = { setupInput }