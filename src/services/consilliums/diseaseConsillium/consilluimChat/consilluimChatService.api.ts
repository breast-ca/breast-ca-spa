import { WS_HOST } from "@/constants";
import { Socket, io } from "socket.io-client";
import { SendMessageDto } from "./consilluimChatService.types";
import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { MessageResponseDto } from "@/api/shared";

export const lastMessagesQuery = createQuery<[number], MessageResponseDto[]>({
  handler: (consilliumId) =>
    axios.get(`messages/consillium/${consilliumId}`, {}),
});

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
