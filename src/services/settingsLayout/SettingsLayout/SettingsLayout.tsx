import { FC } from "react";
import {
  Content,
  LogoContent,
  LogoWrapper,
  Menu,
  OutletContent,
  Wrapper,
} from "./SettingsLayout.styled";
import { Props } from "./SettingsLayout.types";
import { Outlet } from "react-router-dom";
import { MenuList } from "@/services/mainLayout/MainLayout/MenuDrawer/MenuList";
import { LogoIcon } from "@/services/login/LoginPage/assets/LogoIcon";
import { BackCircle } from "@/components/BackButton/BackButton";

export const SettingsLayout: FC<Props> = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoContent>
          <BackCircle />
          <LogoIcon />
        </LogoContent>
        <Content>
          <Menu>
            <MenuList />
          </Menu>
          <OutletContent>
            <Outlet />
          </OutletContent>
        </Content>
      </LogoWrapper>
    </Wrapper>
  );
};
