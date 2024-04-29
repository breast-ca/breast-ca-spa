import { ConsilliumResponseDto, MessageResponseDto } from "@/api/shared";
import { SendMessageDto } from "../consilluimChatService.types";

export type Props = {
  consillium: ConsilliumResponseDto;
  isLead: boolean;
  handleSendMessage: (payload: Omit<SendMessageDto, "consilliumId">) => void;
  messagesList: MessageResponseDto[];
};
