const display = (character1, character2) => {

process.stdout.write(`${character1.output_value()}          ${character2.output_value()}`);

const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  } else {
    character1.performCommand(str);
    character2.performCommand(str);

    process.stdout.clearLine();
    process.stdout.cursorTo(0);

    process.stdout.write(`${character1.output_value()}          ${character2.output_value()}`);
  }
});
}

module.exports = display;