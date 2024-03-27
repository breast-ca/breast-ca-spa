import { FC } from "react";
import { Content, Menu, OutletContent, Wrapper } from "./SettingsLayout.styled";
import { Props } from "./SettingsLayout.types";
import { Outlet } from "react-router-dom";
import { MenuList } from "@/services/mainLayout/MainLayout/MenuDrawer/MenuList";
import { GoBack } from "@/components/BackButton";

export const SettingsLayout: FC<Props> = () => {
  return (
    <Wrapper>
      <Content>
        <Menu>
          <GoBack />
          <MenuList />
        </Menu>
        <OutletContent>
          <Outlet />
        </OutletContent>
      </Content>
    </Wrapper>
  );
};
