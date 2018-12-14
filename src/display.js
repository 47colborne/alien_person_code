const game = require('./game')

const getStateAndDisplay = () => {

	const characterValues = game.getCharacterValues()

	const char1Value = characterValues[0]
	const char2Value = characterValues[1]

	setTimeout(() => { displayValues(char1Value, char2Value) }, 3000);
}

const displayValues = (char1Value, char2Value) => {
	process.stdout.clearLine();
    process.stdout.cursorTo(0);

    process.stdout.write("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
    process.stdout.write(`${char1Value}          ${char2Value}`);
}

module.exports = {
	getStateAndDisplay: getStateAndDisplay
}