import { FC } from "react";
import { Props } from "./MainMenu.types";
import { ChatDots, Grid, People, Search } from "react-bootstrap-icons";
import {
  GridWrapper,
  LogoWrapper,
  MenuItem,
  MenuPanel,
} from "./MainMenu.styled";
import { Tooltip } from "antd";
import logo from "./assets/logo.png";

export const MainMenu: FC<Props> = ({ handleOpenDrawer }) => {
  const menuItems = [
    {
      icon: <People size={24} />,
      text: "Пациенты",
      path: "/patients",
    },
    {
      icon: <ChatDots size={24} />,
      text: "Консилиум",
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
      {menuItems.map(({ icon, path, text }) => (
        <Tooltip
          mouseEnterDelay={0.6}
          title={text}
          key={text}
          placement="right"
          color="white"
          overlayStyle={{ color: "black !important" }}
        >
          <MenuItem to={path}>{icon}</MenuItem>
        </Tooltip>
      ))}
      <LogoWrapper>
        <img src={logo} alt="Your SVG" />
        BreastCa
      </LogoWrapper>
    </MenuPanel>
  );
};
