import { FC, useMemo } from "react";
import { Props } from "./MainMenu.types";
import {
  BarChartLine,
  ChatDots,
  ClipboardData,
  Grid,
  People,
} from "react-bootstrap-icons";
import {
  GridWrapper,
  LogoWrapper,
  MenuItem,
  MenuPanel,
} from "./MainMenu.styled";
import { Tooltip } from "antd";
import logo from "./assets/logo.svg";

export const MainMenu: FC<Props> = ({ handleOpenDrawer, user }) => {
  const menuItems = useMemo(() => {
    const items = [
      {
        icon: <People size={24} />,
        text: "Пациенты",
        path: "/patients",
      },
    ];

    if (user?.isAnalysist) {
      items.push({
        icon: <ClipboardData size={24} />,
        text: "Анализы",
        path: "/analysis",
      });
    }

    items.push({
      icon: <ChatDots size={24} />,
      text: "Консилиумы",
      path: "/messages",
    });

    items.push({
      icon: <BarChartLine size={24} />,
      text: "Статистика",
      path: "/statistics",
    });

    return items;
  }, [user?.isAnalysist]);

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
