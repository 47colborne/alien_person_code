import GameEvent from "./GameEvent";

export interface Subscriber {
  handleEvent(event: GameEvent): void;
}

export default class MessageBus {
  private subscribers: Subscriber[] = [];

  public subscribe(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }

  public publish(event: GameEvent) {
    this.subscribers.forEach((subscriber: Subscriber) => {
      subscriber.handleEvent(event);
    });
  }
}
