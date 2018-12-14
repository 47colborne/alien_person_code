const game = require('./game')

const getStateAndDisplay = () => {

	const characterValues = game.getCharacterValues()

	const char1Value = characterValues[0]
	const char2Value = characterValues[1]

	displayValues(char1Value, char2Value)
}

const displayValues = (char1Value, char2Value) => {
	process.stdout.clearLine();
    process.stdout.cursorTo(0);

    process.stdout.write("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
    process.stdout.write(`${char1Value}          ${char2Value}`);
    process.stdout.write("\n\n\n\n\n\n\n\n")
}

module.exports = {
	getStateAndDisplay: getStateAndDisplay
}