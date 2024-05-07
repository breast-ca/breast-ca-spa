import { ConsilliumResponseDto } from "@/api/shared";
import { FC } from "react";
import { ConsilliumChat } from "./ConsilliumChat";
import { useUnit } from "effector-react";
import {
  rolesTranslatesQuery,
  userQuery,
} from "@/services/user/userService.api";
import { consilluimChatService } from "./consilluimChatService.model";
import { lastMessagesQuery } from "./consilluimChatService.api";

const {
  inputs,
  outputs,
  gates: { ConsilliumGate },
} = consilluimChatService;

export const ConsilluimChatContainer: FC<{
  consillium: ConsilliumResponseDto;
  handleEnd: () => void;
}> = ({ consillium, handleEnd }) => {
  const { user, handleSendMessage, messagesList, rolesTranslates, isLoading } =
    useUnit({
      user: userQuery.$data,
      handleSendMessage: inputs.handleSendMessage,
      messagesList: outputs.$messages,
      rolesTranslates: rolesTranslatesQuery.$data,
      isLoading: lastMessagesQuery.$pending,
    });

  const isLead = consillium.usersOnConsillium.some(
    (u) => u.user.id === user?.id && u.isLead
  );

  return (
    <>
      <ConsilliumGate id={consillium.id} />
      <ConsilliumChat
        consillium={consillium}
        isLead={isLead}
        handleSendMessage={handleSendMessage}
        messagesList={messagesList}
        user={user}
        handleEnd={handleEnd}
        rolesTranslates={rolesTranslates}
        isLoading={isLoading}
      />
    </>
  );
};
