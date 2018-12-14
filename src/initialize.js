const game = require('./game')
const display = require('./display')

game.startGameAndListener()

setInterval(display.getStateAndDisplay, 50);