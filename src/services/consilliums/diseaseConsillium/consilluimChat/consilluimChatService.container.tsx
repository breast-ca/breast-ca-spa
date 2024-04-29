import { ConsilliumResponseDto } from "@/api/shared";
import { FC } from "react";
import { ConsilliumChat } from "./ConsilliumChat";
import { useUnit } from "effector-react";
import { userQuery } from "@/services/user/userService.api";
import { consilluimChatService } from "./consilluimChatService.model";

const {
  inputs,
  outputs,
  gates: { ConsilliumGate },
} = consilluimChatService;

export const ConsilluimChatContainer: FC<{
  consillium: ConsilliumResponseDto;
}> = ({ consillium }) => {
  const { user, handleSendMessage, messagesList } = useUnit({
    user: userQuery.$data,
    handleSendMessage: inputs.handleSendMessage,
    messagesList: outputs.$messages,
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
      />
    </>
  );
};
