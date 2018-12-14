class Character {
  constructor(value, commands) {
    this.value = value;
    this.commands = commands
  }

  performCommand(command) {
    if (this.commands[command]) {
      this.value = this.commands[command] 
    }
    // if (command == 'a') {
    //   this.value = 'a'
    // } else if (command == 'A') {
    //   this.value = 'A'
    // }
  }

  output_value() {
    return this.value
  }
}

module.exports = Character;