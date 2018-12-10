import GameEvent from "./GameEvent";

export default class KeyPressEvent implements GameEvent {
  public readonly type = KeyPressEventType;

  public value: string;

  constructor(value: string) {
    this.value = value;
  }
}

export const KeyPressEventType = "KEY_PRESS_EVENT";
