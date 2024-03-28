import { FC } from "react";
import { Wrapper } from "./UserItem.styled";
import { Props } from "./UserItem.types";
import { ContextMenuButton } from "@/components/ContextMenuButton";

export const UserItem: FC<Props> = ({ user, translates, handleEditUser }) => {
  return (
    <Wrapper>
      <div>
        {user.lastName} {user.firstName} {user.middleName}
      </div>
      <div>{user.roles.map((role) => translates[role]).join(", ")}</div>
      <ContextMenuButton
        size="small"
        menuButtons={[
          {
            title: "Редактировать",
            onClick: () => handleEditUser(user),
          },
        ]}
      />
    </Wrapper>
  );
};
