import { ConsilliumResponseDto } from "@/api/shared";
import { FC } from "react";
import { ConsilliumChat } from "./ConsilliumChat";
import { useUnit } from "effector-react";
import { userQuery } from "@/services/user/userService.api";

export const ConsilluimChatContainer: FC<{
  consillium: ConsilliumResponseDto;
}> = ({ consillium }) => {
  const { user } = useUnit({
    user: userQuery.$data,
  });

  const isLead = consillium.usersOnConsillium.some(
    (u) => u.user.id === user?.id && u.isLead
  );

  return (
    <>
      <ConsilliumChat consillium={consillium} isLead={isLead} />
    </>
  );
};
