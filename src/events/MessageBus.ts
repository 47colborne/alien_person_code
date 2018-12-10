import Event from "./Event";

export interface Subscriber {
  handleEvent(event: Event): void;
}

export default class MessageBus {
  private subscriberList: Subscriber[] = [];

  public addSubscriber(subscriber: Subscriber): void {
    this.subscriberList.push(subscriber);
  }

  public publish(event: Event): void {
    this.subscriberList.forEach((subscriber: Subscriber) => {
      subscriber.handleEvent(event);
    });
  }
}
