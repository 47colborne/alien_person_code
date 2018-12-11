/* tslint:disable:no-console */
import readline from "readline";
import Character from "./Character";
import Game from "./Game";
import MessageBus from "./events/MessageBus";
import KeyPressEvent from "./events/KeyPressEvent";
import { CommandMapping } from "./commands/Command";
import { setValueCommand } from "./commands/setValueCommand";

const alien = new Character("a");
const person = new Character("p");

const commands: CommandMapping = {
  a: setValueCommand(alien, "A"),
  A: setValueCommand(alien, "a"),
  p: setValueCommand(person, "P"),
  P: setValueCommand(person, "p"),
};

const game = new Game(alien, person, commands);

const messageBus = new MessageBus();
messageBus.subscribe(game);

// console input
readline.emitKeypressEvents(process.stdin);
// @ts-ignore
process.stdin.setRawMode(true);
process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    process.exit();
  } else {
    const event = new KeyPressEvent(str);
    messageBus.publish(event);
  }
});

console.log("Press any key...");
