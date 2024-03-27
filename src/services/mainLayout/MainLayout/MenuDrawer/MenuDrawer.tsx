import { FC } from "react";
import {
  AvatarSC,
  DrawerContent,
  UserDescription,
  UserInfo as UserInfoContent,
} from "./MenuDrawer.styled";
import { Props } from "./MenuDrawer.types";
import { Drawer } from "antd";
import { Button } from "@/components/Button";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";
import { MenuList } from "./MenuList";
import { useUnit } from "effector-react";
import { rolesTranslatesQuery } from "@/services/user/userService.api";
import { UserResponseDto } from "@/api/shared";

export const UserInfo: FC<{
  user: UserResponseDto | null;
  showLogin?: boolean;
}> = ({ user, showLogin }) => {
  const rolesTranslates = useUnit(rolesTranslatesQuery.$data);

  if (!user) return null;

  return (
    <UserInfoContent>
      <AvatarSC
        style={{
          backgroundColor: "var(--light)",
          color: "var(--primary)",
          fontSize: 24,
        }}
        size={60}
      >
        {user.firstName[0].toUpperCase()}
        {user.lastName[0].toUpperCase()}
      </AvatarSC>
      <div>
        <strong>
          {user.lastName} {user.firstName} {user.middleName}
        </strong>
        {showLogin && <UserDescription>{user.login}</UserDescription>}
        {rolesTranslates && (
          <UserDescription>
            {user.roles
              .map((role) => rolesTranslates.translates[role] || role)
              .join(", ")}
          </UserDescription>
        )}
      </div>
    </UserInfoContent>
  );
};

export const MenuDrawer: FC<Props> = ({
  isDrawerOpen,
  handleClose,
  handleSignOut,
  user,
}) => {
  return (
    <Drawer
      title={<UserInfo user={user} />}
      closable={false}
      placement="left"
      onClose={handleClose}
      open={isDrawerOpen}
      key="menu-drawer"
    >
      <DrawerContent>
        <MenuList />
        <Button icon={<ArrowLeftCircleFill />} floating onClick={handleSignOut}>
          Выйти из системы
        </Button>
      </DrawerContent>
    </Drawer>
  );
};
