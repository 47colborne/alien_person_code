const Character = require('./character');

const commands1 = {
  'a': 'a',
  'A': 'B'
}

const commands2 = {
  'p': 'P',
  'P': 'p'
}

const character1 = new Character('A', commands1);
const character2 = new Character('P', commands2);

const pendingUpdatesObject = {}

const startGameAndListener = () => {
	process.stdout.write("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
	process.stdout.write(`${character1.output_value()}          ${character2.output_value()}`);
	process.stdout.write("\n\n\n\n\n\n\n\n")

	const readline = require('readline');
	readline.emitKeypressEvents(process.stdin);
	process.stdin.setRawMode(true);


	process.stdin.on('keypress', (str, key) => {
	  if (key.ctrl && key.name === 'c') {
	    process.exit();
	  } else {
	  	if (key.name === 'c') {
	  // 		for (var property1 in object1) {
			//   string1 += object1[property1];
			// }

	  		Object.keys(pendingUpdatesObject).forEach((key) => {
	  			clearTimeout(pendingUpdatesObject[key])
	  			delete pendingUpdatesObject[key]
	  		})
	  	} else {
	  		const updateId = Date.now()
			const pendingUpdate = setTimeout(() => {  
				character1.performCommand(str);
		    	character2.performCommand(str);
		    	delete pendingUpdatesObject[updateId]
			}, 3000);

			pendingUpdatesObject[updateId] = pendingUpdate
	  	}
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