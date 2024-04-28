import { FC } from "react";
import { AvatarsWrapper, HeaderAvatarSC } from "./ConsilliumChat.styled";
import { ConsilliumMemberDto } from "@/api/shared";

export const UsersOnConsillium: FC<{
  usersOnConsillium: ConsilliumMemberDto[];
}> = ({ usersOnConsillium }) => {
  return (
    <AvatarsWrapper>
      {usersOnConsillium.map(({ user, isLead }) => (
        <HeaderAvatarSC
          colorHash={user.firstName}
          key={user.id}
          isLead={isLead}
        >
          {user.firstName[0].toUpperCase()}
        </HeaderAvatarSC>
      ))}
    </AvatarsWrapper>
  );
};
