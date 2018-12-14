const Character = require('./character');
const display = require('./display')

const commands1 = {
  'u': 'U',
  'U': 'u'
}

const commands2 = {
  'b': 'B',
  'B': 'b'
}

let character1 = new Character('U', commands1);
let character2 = new Character('B', commands2);

display(character1, character2)