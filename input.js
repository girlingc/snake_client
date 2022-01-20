const setupInput = function () {
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
    stdout.write("You have quit. You are a quitter.\n")
    process.exit();
  }
};

setupInput();
handleUserInput();

module.exports = { setupInput }