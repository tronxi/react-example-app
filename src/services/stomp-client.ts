import {Client, IMessage} from "@stomp/stompjs";
export class StompClient{
  private client: Client;

  constructor(callback: (e: IMessage) => void = (_) => {}) {
    this.client = new Client({
      brokerURL: 'ws://localhost:8080/ws',
      onConnect: () => {
        this.client.subscribe('/topic/message', callback)
      },
    });
  }

  public activate() {
    this.client.activate();
  }

  public deactivate() {
    this.client.deactivate();
  }

}