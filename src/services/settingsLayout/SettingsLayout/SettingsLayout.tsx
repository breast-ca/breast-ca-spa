import { FC } from "react";
import {
  Content,
  LogoWrapper,
  Menu,
  OutletContent,
  Wrapper,
} from "./SettingsLayout.styled";
import { Props } from "./SettingsLayout.types";
import { Outlet } from "react-router-dom";
import { MenuList } from "@/services/mainLayout/MainLayout/MenuDrawer/MenuList";
import { GoBack } from "@/components/BackButton";
import { LogoIcon } from "@/services/login/LoginPage/assets/LogoIcon";

export const SettingsLayout: FC<Props> = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <LogoIcon />
        <Content>
          <Menu>
            <GoBack />
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
