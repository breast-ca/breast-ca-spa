import { FC, useMemo } from "react";
import {
  AvatarSC,
  DrawerContent,
  UserDescription,
  UserInfo,
} from "./MenuDrawer.styled";
import { Props } from "./MenuDrawer.types";
import { Drawer } from "antd";
import { Button } from "@/components/Button";
import { ArrowLeftCircleFill } from "react-bootstrap-icons";
import { MenuList } from "./MenuList";
import { useUnit } from "effector-react";
import { rolesTranslatesQuery } from "@/services/user/userService.api";

export const MenuDrawer: FC<Props> = ({
  isDrawerOpen,
  handleClose,
  handleSignOut,
  user,
}) => {
  const rolesTranslates = useUnit(rolesTranslatesQuery.$data);

  const userInfo = useMemo(() => {
    if (!user) return null;

    return (
      <UserInfo>
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
          {rolesTranslates && (
            <UserDescription>
              {user.roles
                .map((role) => rolesTranslates.translates[role] || role)
                .join(", ")}
            </UserDescription>
          )}
        </div>
      </UserInfo>
    );
  }, [rolesTranslates, user]);

  return (
    <Drawer
      title={userInfo}
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
