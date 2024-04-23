import { FC } from "react";
import { Wrapper, Text } from "./AuthorBadge.styled";
import { Props } from "./AuthorBadge.types";
import {
  AvatarSC,
  UserDescription,
} from "@/services/mainLayout/MainLayout/MenuDrawer/MenuDrawer.styled";
import { useUnit } from "effector-react";
import { rolesTranslatesQuery } from "@/services/user/userService.api";

export const AuthorBadge: FC<Props> = ({ user }) => {
  const rolesTranslates = useUnit(rolesTranslatesQuery.$data);

  if (!rolesTranslates) return null;

  return (
    <Wrapper>
      <AvatarSC
        style={{
          backgroundColor: "var(--light)",
          color: "var(--primary)",
          fontSize: 14,
        }}
        size={32}
      >
        {user.firstName[0].toUpperCase()}
        {user.lastName[0].toUpperCase()}
      </AvatarSC>
      <Text>
        <strong>
          {user.lastName} {user.firstName} {user.middleName}
        </strong>
        {rolesTranslates && (
          <UserDescription style={{ fontSize: 10 }}>
            {user.roles
              .map((role) => rolesTranslates.translates[role] || role)
              .join(", ")}
          </UserDescription>
        )}
      </Text>
    </Wrapper>
  );
};
