import { AestimateBroker } from "aestimate-shared";

const broker = new AestimateBroker();

export const useSocketConnection = () => {
  broker.connectAsClient("ws://localhost:8080");

  broker.on("open", () => {
    console.log("open!");
  });

  // broker.on("updateName", (params) => {
  //   console.log(params);
  // });

  // broker.on("open", () => {
  //   console.log("connected!");
  // });
};
