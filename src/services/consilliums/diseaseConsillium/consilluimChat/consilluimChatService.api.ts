import { WS_HOST } from "@/constants";
import { Socket, io } from "socket.io-client";
import { SendMessageDto } from "./consilluimChatService.types";

export const connectToConsillium = ({
  id,
  token,
}: {
  id: number;
  token: string;
}) => {
  return io(WS_HOST, {
    reconnectionDelayMax: 10000,
    auth: {
      token,
    },
    query: {
      consilliumId: id,
    },
  });
};

export const sendMessageToConsilluim = ({
  socket,
  message,
}: {
  socket: Socket;
  message: SendMessageDto;
}) => {
  socket.emit("message", message);
};
