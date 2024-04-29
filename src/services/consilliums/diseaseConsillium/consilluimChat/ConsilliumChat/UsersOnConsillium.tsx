import { FC } from "react";
import { AvatarsWrapper, HeaderAvatarSC } from "./ConsilliumChat.styled";
import { ConsilliumMemberDto, UserLightResponseDto } from "@/api/shared";

export const UserAvatar: FC<{
  user: UserLightResponseDto;
  isLead: boolean;
}> = ({ user, isLead }) => {
  return (
    <HeaderAvatarSC colorHash={user.firstName} key={user.id} isLead={isLead}>
      {user.firstName[0].toUpperCase()}
    </HeaderAvatarSC>
  );
};

export const UsersOnConsillium: FC<{
  usersOnConsillium: ConsilliumMemberDto[];
}> = ({ usersOnConsillium }) => {
  return (
    <AvatarsWrapper>
      {usersOnConsillium.map(({ user, isLead }) => (
        <UserAvatar user={user} isLead={isLead} />
      ))}
    </AvatarsWrapper>
  );
};
