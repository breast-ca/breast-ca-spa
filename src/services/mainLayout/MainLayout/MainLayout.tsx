import { FC } from "react";
import { Outlet } from "react-router-dom";
import {
  ContentWrapper,
  MenuItem,
  MenuPanel,
  Wrapper,
} from "./MainLayout.styled";
import { Props } from "./MainLayout.types";
import { ChatDots, Grid, People, Search } from "react-bootstrap-icons";

export const MainLayout: FC<Props> = () => {
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
        <Grid size={32} />
        {menuItems.map(({ icon, path }) => (
          <MenuItem to={path}>{icon}</MenuItem>
        ))}
      </MenuPanel>
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </Wrapper>
  );
};
