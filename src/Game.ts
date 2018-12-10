/* tslint:disable:no-console */
import Character from "./Character";
import KeyPressEvent, { KeyPressEventType } from "./events/KeyPressEvent";
import { Subscriber } from "./events/MessageBus";
import GameEvent from "./events/GameEvent";

interface CommandMapping {
  [command: string]: () => void;
}

export default class Game implements Subscriber {
  private readonly characterA: Character;
  private readonly characterB: Character;

  private readonly commands: CommandMapping;

  constructor(characterA: Character, characterB: Character, commands: CommandMapping) {
    this.characterA = characterA;
    this.characterB = characterB;
    this.commands = commands;
  }

  public display = (character: Character): void => {
    console.log(`-----${character.value}-----`);
  };

  public handleEvent(event: GameEvent): void {
    if (event.type === KeyPressEventType) {
      this.run((event as KeyPressEvent).value);
    }
  }

  public run(str: string): void {
    const handler = this.commands[str];

    if (!handler) {
      return;
    }

    handler();

    console.log(`((((Event Received: ${str})))))`);
    this.display(this.characterA);
    this.display(this.characterB);
  }
}
