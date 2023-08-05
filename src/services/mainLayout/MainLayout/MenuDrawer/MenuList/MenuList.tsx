import { FC } from "react";
import {
  ChevronSC,
  MenuItem,
  MenuItemIcon,
  MenuItemText,
  Wrapper,
} from "./MenuList.styled";
import { Props } from "./MenuList.types";
import { BuildingFill, GearFill, PersonFill } from "react-bootstrap-icons";

export const MenuList: FC<Props> = () => {
  const menuItems = [
    {
      icon: <PersonFill size={18} />,
      text: "Профиль",
      path: "/patients",
      color: "#ff783a",
    },
    {
      icon: <BuildingFill size={18} />,
      text: "Организация",
      path: "/messages",
      color: "#6287e5",
    },
    {
      icon: <GearFill size={18} />,
      text: "Настройки",
      path: "/search",
      color: "#25242a",
    },
  ];

  return (
    <Wrapper>
      {menuItems.map(({ icon, text, color }) => (
        <MenuItem key={text}>
          <ChevronSC className="drawer-menu-chevron" />
          <MenuItemIcon color={color}>{icon}</MenuItemIcon>
          <MenuItemText>{text}</MenuItemText>
        </MenuItem>
      ))}
    </Wrapper>
  );
};
