/* tslint:disable:no-console */
import Character from "./Character";
import Command from "./Command";
import Event from "./events/Event";
import { Subscriber } from "./events/MessageBus";

export default class Game implements Subscriber {
  private readonly characterA: Character;
  private readonly characterB: Character;

  private commandA: Command;
  private commandB: Command;

  constructor(characterA: Character, characterB: Character, commandA: Command, commandB: Command) {
    this.characterA = characterA;
    this.characterB = characterB;
    this.commandA = commandA;
    this.commandB = commandB;
  }

  public display = (character: Character): void => {
    console.log(`-----${character.value}-----`);
  };

  public handleEvent(event: Event): void {
    this.run(event.value);
  }

  public run(str: string): void {
    this.commandB.setCommandValue(str, this.characterB);
    this.commandA.setCommandValue(str, this.characterA);

    console.log(`((((Event Received: ${str})))))`);
    this.display(this.characterA);
    this.display(this.characterB);
  }
}
