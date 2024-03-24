import { FC } from "react";
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

export const MenuDrawer: FC<Props> = ({
  isDrawerOpen,
  handleClose,
  handleSignOut,
}) => {
  return (
    <Drawer
      title={
        <UserInfo>
          <AvatarSC
            style={{
              backgroundColor: "var(--light)",
              color: "var(--primary)",
              fontSize: 24,
            }}
            size={60}
          >
            А
          </AvatarSC>
          <div>
            <strong>Васильева Александра Петровна</strong>
            <UserDescription>Врач-онколог</UserDescription>
          </div>
        </UserInfo>
      }
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
