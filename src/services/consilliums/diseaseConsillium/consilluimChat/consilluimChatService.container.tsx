import { ConsilliumResponseDto } from "@/api/shared";
import { FC } from "react";
import { ConsilliumChat } from "./ConsilliumChat";
import { useUnit } from "effector-react";
import { userQuery } from "@/services/user/userService.api";
import { consilluimChatService } from "./consilluimChatService.model";

const {
  gates: { ConsilliumGate },
} = consilluimChatService;

export const ConsilluimChatContainer: FC<{
  consillium: ConsilliumResponseDto;
}> = ({ consillium }) => {
  const { user, handleSendMessage } = useUnit({
    user: userQuery.$data,
    handleSendMessage: consilluimChatService.inputs.handleSendMessage,
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
      />
    </>
  );
};
