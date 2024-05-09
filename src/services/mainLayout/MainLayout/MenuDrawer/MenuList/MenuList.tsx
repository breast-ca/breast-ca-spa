import { FC } from "react";
import {
  ChevronSC,
  MenuItem,
  MenuItemIcon,
  MenuItemText,
  Wrapper,
} from "./MenuList.styled";
import { Props } from "./MenuList.types";
import {
  BuildingFill,
  InfoCircleFill,
  PersonFill,
} from "react-bootstrap-icons";

const menuItems = [
  {
    icon: <PersonFill size={18} />,
    text: "Профиль",
    path: "profile",
    color: "#ff783a",
  },
  {
    icon: <BuildingFill size={18} />,
    text: "Организация",
    path: "organization",
    color: "#6287e5",
  },
  {
    icon: <InfoCircleFill size={18} />,
    text: "О программе",
    path: "about",
    color: "#25242a",
  },
];

export const MenuList: FC<Props> = () => {
  return (
    <Wrapper>
      {menuItems.map(({ icon, text, color, path }) => (
        <MenuItem key={text} to={`/settings/${path}`} replace>
          <ChevronSC className="drawer-menu-chevron" />
          <MenuItemIcon color={color}>{icon}</MenuItemIcon>
          <MenuItemText>{text}</MenuItemText>
        </MenuItem>
      ))}
    </Wrapper>
  );
};
