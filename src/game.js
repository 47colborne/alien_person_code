const Character = require('./character');

const commands1 = {
  'a': 'a',
  'A': 'B'
}

const commands2 = {
  'p': 'P',
  'P': 'p'
}

let character1 = new Character('A', commands1);
let character2 = new Character('P', commands2);


const startGameAndListener = () => {
	process.stdout.write("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
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
	  }
	});
}

const getCharacterValues = () => {
	let char1Value = character1.output_value()
	let char2Value = character2.output_value()
	return [char1Value, char2Value]
}

module.exports = {
	startGameAndListener: startGameAndListener,
	getCharacterValues: getCharacterValues
}