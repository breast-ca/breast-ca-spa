import { authService } from "@/services/auth/authService.model";
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  sample,
} from "effector";
import { createGate } from "effector-react";
import { Socket } from "socket.io-client";
import {
  connectToConsillium,
  lastMessagesQuery,
  sendMessageToConsilluim,
} from "./consilluimChatService.api";
import {
  ConsilliumSocketPayload,
  SendMessageDto,
} from "./consilluimChatService.types";
import { MessageResponseDto } from "@/api/shared";

const ConsilliumGate = createGate<{ id: number }>();

const connectionFx = createEffect(connectToConsillium);

const handleSendMessage = createEvent<Omit<SendMessageDto, "consilliumId">>();

const handleNewMessage = createEvent<MessageResponseDto>();

const sendMessageFx = createEffect(sendMessageToConsilluim);

const $io = createStore<Socket | null>(null)
  .on(ConsilliumGate.close, (socket) => {
    socket?.disconnect();

    return null;
  })
  .on(connectionFx.doneData, (_, socket) => socket)
  .on(authService.outputs.$accessToken, (socket, token) => {
    if (!socket) return socket;

    socket.auth = {
      token,
    };

    return socket;
  });

sample({
  source: authService.outputs.$accessToken,
  clock: ConsilliumGate.open,
  fn: (token, { id }) => ({ id, token: token! }),
  target: connectionFx,
});

const $consilliumPayload = combine(
  $io,
  ConsilliumGate.state,
  (io, { id }): null | ConsilliumSocketPayload => {
    if (!io || !id) return null;

    return { socket: io, consilliumId: id };
  }
);

sample({
  source: $io,
  filter: Boolean,
  fn: (socket) => {
    socket.on("newMessage", (message) => handleNewMessage(message));
  },
});

sample({
  source: $consilliumPayload,
  filter: (payload): payload is ConsilliumSocketPayload => Boolean(payload),
  clock: handleSendMessage,
  fn: (payload, message) => {
    return {
      socket: payload!.socket!,
      message: { ...message, consilliumId: payload!.consilliumId! },
    };
  },
  target: sendMessageFx,
});

const $messages = createStore<MessageResponseDto[]>([])
  .on(lastMessagesQuery.finished.success, (_, { result }) => result)
  .on(handleNewMessage, (prev, newMessage) => [...prev, newMessage])
  .reset(ConsilliumGate.close);

$messages.watch(console.log);

sample({
  clock: ConsilliumGate.open,
  filter: ({ id }) => Boolean(id),
  fn: ({ id }) => id,
  target: lastMessagesQuery.start,
});

export const consilluimChatService = {
  inputs: { handleSendMessage },
  outputs: { $io, $messages },
  gates: { ConsilliumGate },
};
