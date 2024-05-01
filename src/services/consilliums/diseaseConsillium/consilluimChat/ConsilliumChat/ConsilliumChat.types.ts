import {
  ConsilliumResponseDto,
  MessageResponseDto,
  RolesDto,
  UserResponseDto,
} from "@/api/shared";
import { SendMessageDto } from "../consilluimChatService.types";

export type Props = {
  consillium: ConsilliumResponseDto;
  isLead: boolean;
  handleSendMessage: (payload: Omit<SendMessageDto, "consilliumId">) => void;
  messagesList: MessageResponseDto[];
  user: UserResponseDto | null;
  handleEnd: () => void;
  rolesTranslates: RolesDto | null;
};
