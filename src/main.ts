/* tslint:disable:no-console */
import readline from "readline";
import Character from "./Character";
import Game from "./Game";
import MessageBus from "./events/MessageBus";
import KeyPressEvent from "./events/KeyPressEvent";

const alien = new Character("a");
const person = new Character("p");

const commands = {
  a: () => (alien.value = "A"),
  A: () => (alien.value = "a"),
  p: () => (person.value = "P"),
  P: () => (person.value = "p"),
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
