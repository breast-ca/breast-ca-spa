import { FC } from "react";
import { Login, Roles, UserName, Wrapper } from "./UserItem.styled";
import { Props } from "./UserItem.types";
import { ContextMenuButton } from "@/components/ContextMenuButton";

export const UserItem: FC<Props> = ({
  user,
  translates,
  handleEditUser,
  isAdmin,
}) => {
  return (
    <Wrapper>
      <UserName>
        <div>
          {user.lastName} {user.firstName} {user.middleName}
        </div>
        <Login>{user.login}</Login>
      </UserName>
      <Roles>{user.roles.map((role) => translates[role]).join(", ")}</Roles>
      {isAdmin && (
        <ContextMenuButton
          size="small"
          menuButtons={[
            {
              title: "Редактировать",
              onClick: () => handleEditUser(user),
            },
          ]}
        />
      )}
    </Wrapper>
  );
};
