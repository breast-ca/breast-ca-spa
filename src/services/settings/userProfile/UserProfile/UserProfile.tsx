import { FC } from "react";
import { Wrapper } from "./UserProfile.styled";
import { Props } from "./UserProfile.types";
import { PageHeader } from "@/components/PageHeader";
import { WithLoader } from "@/components/WithLoader";
import { UserInfo } from "@/services/mainLayout/MainLayout/MenuDrawer/MenuDrawer";
import { ContextMenuButton } from "@/components/ContextMenuButton";
import { Pen } from "react-bootstrap-icons";

export const UserProfile: FC<Props> = ({ user, isLoading }) => {
  return (
    <Wrapper>
      <PageHeader title="Профиль">
        <ContextMenuButton
          menuButtons={[{ title: "Редактировать", icon: <Pen /> }]}
          size="small"
        />
      </PageHeader>
      <WithLoader isLoading={isLoading}>
        <UserInfo user={user} showLogin />
      </WithLoader>
    </Wrapper>
  );
};
