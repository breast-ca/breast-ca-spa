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
import { DoorOpen } from "react-bootstrap-icons";

export const MenuDrawer: FC<Props> = ({ isDrawerOpen, handleClose }) => {
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
            size={64}
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
        <div></div>
        <Button icon={<DoorOpen />} floating>
          Выйти
        </Button>
      </DrawerContent>
    </Drawer>
  );
};
