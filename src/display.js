// const game = require('./game')
const game = require('./game')

const continuouslyUpdateStateAndDisplay = () => {
	console.log("HERE:")
	console.log(game)
	const characterState = game.getCharacterState()
	const character1State = character1State[0]
	const character2State = character1State[1]

	// display()

	setInterval(display(character1State, character2State), 1000);

	    

	// process.stdout.write(`${character1.output_value()}          ${character2.output_value()}`);

	// const readline = require('readline');
	// readline.emitKeypressEvents(process.stdin);
	// process.stdin.setRawMode(true);

	// process.stdin.on('keypress', (str, key) => {
	//   if (key.ctrl && key.name === 'c') {
	//     process.exit();
	//   } else {
	//     character1.performCommand(str);
	//     character2.performCommand(str);

	//     process.stdout.clearLine();
	//     process.stdout.cursorTo(0);

	//     process.stdout.write(`${character1.output_value()}          ${character2.output_value()}`);
	//   }
	// });
}

continuouslyUpdateStateAndDisplay()

const display = (character1, character2) => {
	process.stdout.clearLine();
    process.stdout.cursorTo(0);

    process.stdout.write(`${character1State.output_value()}          ${character2State.output_value()}`);
}

module.exports = {
	continuouslyUpdateStateAndDisplay: continuouslyUpdateStateAndDisplay
}