import { FC } from "react";
import { Props } from "./MainMenu.types";
import { ChatDots, Grid, People, Search } from "react-bootstrap-icons";
import { GridWrapper, MenuItem, MenuPanel } from "./MainMenu.styled";

export const MainMenu: FC<Props> = ({ handleOpenDrawer }) => {
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
    <MenuPanel>
      <GridWrapper onClick={handleOpenDrawer}>
        <Grid size={32} />
      </GridWrapper>
      {menuItems.map(({ icon, path }) => (
        <MenuItem to={path}>{icon}</MenuItem>
      ))}
    </MenuPanel>
  );
};
