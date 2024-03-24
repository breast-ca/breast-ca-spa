import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import { ContentWrapper, Wrapper } from "./MainLayout.styled";
import { MainMenu } from "./MainMenu";
import { Props } from "./MainLayout.types";
import { MenuDrawer } from "./MenuDrawer";

export const MainLayout: FC<Props> = ({ handleSignOut, user }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Wrapper>
      <MainMenu handleOpenDrawer={() => setIsDrawerOpen(true)} />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      <MenuDrawer
        isDrawerOpen={isDrawerOpen}
        handleClose={() => setIsDrawerOpen(false)}
        handleSignOut={handleSignOut}
        user={user}
      />
    </Wrapper>
  );
};
