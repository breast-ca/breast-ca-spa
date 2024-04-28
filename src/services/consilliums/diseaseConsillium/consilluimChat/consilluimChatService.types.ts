import { Socket } from "socket.io-client";

export interface SendMessageDto {
  text: string;
  consilliumId: number;
}

export interface ConsilliumSocketPayload {
  socket: Socket;
  consilliumId: number;
}