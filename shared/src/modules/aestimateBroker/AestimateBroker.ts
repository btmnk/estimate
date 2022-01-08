import EventEmitter from "events";
import { WebSocketServer, ServerOptions } from "ws";

export type EventActions = {
  updateName: (name: string) => void;
  open: () => void;
  close: (closeEvent: CloseEvent) => void;
  error: () => void;
};

export type MessagePayload<ActionType extends keyof EventActions = keyof EventActions> = {
  type: ActionType;
  parameters: Parameters<EventActions[ActionType]>;
};

export declare interface AestimateBroker {
  on<ActionType extends keyof EventActions>(event: ActionType, listener: EventActions[ActionType]): this;
  emit<ActionType extends keyof EventActions>(
    event: ActionType,
    ...args: Parameters<EventActions[ActionType]>
  ): boolean;
}

// @TODO: Split into client and server implementation to avoid ws polyfill issue for frontend
export class AestimateBroker extends EventEmitter {
  private client: WebSocket | null = null;
  private server: WebSocketServer | null = null;

  public connectAsClient(url: string) {
    this.client = new WebSocket(url);
    this.client.addEventListener("message", this.handleMessage.bind(this));
    this.client.addEventListener("open", () => this.emit("open"));
    this.client.addEventListener("close", (closeEvent: CloseEvent) => this.emit("close", closeEvent));
    this.client.addEventListener("error", () => this.emit("error"));
  }

  public connectAsServer(options?: ServerOptions) {
    this.server = new WebSocketServer(options);
    this.server.on("connection", (ws) => {
      console.log(`Client connected.`);

      ws.on("message", (data) => console.log(data.toString()));
      ws.send("welcome!");
    });
  }

  private handleMessage(event: MessageEvent<MessagePayload>) {
    if (this.eventHasValidPayload(event)) {
      this.emit(event.data.type, ...event.data.parameters);
    } else {
      console.error(`Got invalid message payload:\n${JSON.stringify(event.data)}`);
    }
  }

  private eventHasValidPayload(event: MessageEvent<Partial<MessagePayload>>): boolean {
    return typeof event.data === "object" && event.data?.type !== undefined;
  }
}

const x = new AestimateBroker();
x.on("updateName", (name) => {
  console.log(name);
});
x.on("open", () => {
  console.log("open!");
});

x.emit("updateName", "asd");
