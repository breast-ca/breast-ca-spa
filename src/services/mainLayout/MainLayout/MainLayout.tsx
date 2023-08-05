import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import {
  AvatarSC,
  ContentWrapper,
  DrawerContent,
  GridSC,
  MenuItem,
  MenuPanel,
  UserDescription,
  UserInfo,
  Wrapper,
} from "./MainLayout.styled";
import { Props } from "./MainLayout.types";
import { ChatDots, DoorOpen, People, Search } from "react-bootstrap-icons";
import { Button, Drawer } from "antd";

export const MainLayout: FC<Props> = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const menuItems = [
    {
      icon: <People size={24} />,
      text: "Пациенты",
      path: "/patients",
    },
    {
      icon: <ChatDots size={24} />,
      text: "Чаты",
      path: "/messages",
    },
    {
      icon: <Search size={24} />,
      text: "Поиск",
      path: "/search",
    },
  ];

  return (
    <Wrapper>
      <MenuPanel>
        <GridSC size={32} onClick={() => setIsDrawerOpen(true)} />
        {menuItems.map(({ icon, path }) => (
          <MenuItem to={path}>{icon}</MenuItem>
        ))}
      </MenuPanel>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
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
        onClose={() => setIsDrawerOpen(false)}
        open={isDrawerOpen}
        key="menu-drawer"
      >
        <DrawerContent>
          <div></div>
          <Button icon={<DoorOpen />}>Выйти</Button>
        </DrawerContent>
      </Drawer>
    </Wrapper>
  );
};
