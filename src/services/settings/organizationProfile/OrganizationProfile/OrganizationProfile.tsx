import { FC, useState } from "react";
import {
  InfoWrapper,
  ListWrapper,
  Wrapper,
} from "./OrganizationProfile.styled";
import { Props } from "./OrganizationProfile.types";
import { PageHeader } from "@/components/PageHeader";
import { ContextMenuButton } from "@/components/ContextMenuButton";
import { Pen, PlusCircle } from "react-bootstrap-icons";
import { WithLoader } from "@/components/WithLoader";
import { Skeleton } from "antd";
import { getAddressString } from "@/utils/getAddressString";
import { Segmented } from "@/components/Segmented";
import { CommonInfo } from "@/components/CommonInfo";
import { UserItem } from "./UserItem";
import { useUnit } from "effector-react";
import { rolesTranslatesQuery } from "@/services/user/userService.api";
import {
  EditUserModalContainer,
  editUserModalService,
} from "../../userProfile/editUserModal";
import {
  CreateUserModalContainer,
  addUserModalService,
} from "../../userProfile/createUserModal";
import { organizationProfileService } from "..";

export const OrganizationProfile: FC<Props> = ({
  organization,
  isLoading,
  isAdmin,
  usersList,
}) => {
  const [segment, setSegment] = useState<"info" | "members">("info");

  const { rolesTranslates, handleEditUser, handleAddUser, openEditModal } =
    useUnit({
      rolesTranslates: rolesTranslatesQuery.$data,
      handleEditUser: editUserModalService.inputs.handleEditUser,
      handleAddUser: addUserModalService.inputs.handleAddUser,
      openEditModal: organizationProfileService.inputs.openEditModal,
    });

  return (
    <Wrapper>
      <CreateUserModalContainer />
      <EditUserModalContainer />
      <PageHeader title={isLoading ? <Skeleton.Input /> : organization?.name}>
        {isAdmin && (
          <ContextMenuButton
            menuButtons={[
              {
                title: "Редактировать",
                icon: <Pen />,
                onClick: openEditModal,
              },
              {
                title: "Создать сотрудника",
                icon: <PlusCircle />,
                onClick: handleAddUser,
              },
            ]}
            size="small"
          />
        )}
      </PageHeader>
      <WithLoader isLoading={isLoading}>
        {organization && (
          <>
            <Segmented
              value={segment}
              onChange={(segment) => setSegment(segment as "info" | "members")}
              options={[
                { label: "Информация", value: "info" },
                { label: "Сотрудники", value: "members" },
              ]}
            />

            {segment === "info" && (
              <InfoWrapper>
                <CommonInfo
                  items={[
                    {
                      key: "Название",
                      value: organization.name,
                    },
                    {
                      key: "Адрес",
                      value: getAddressString(organization.address),
                    },
                  ]}
                />
              </InfoWrapper>
            )}
            {segment === "members" && rolesTranslates?.translates && (
              <ListWrapper>
                {usersList.map((user) => (
                  <UserItem
                    key={user.id}
                    user={user}
                    translates={rolesTranslates.translates}
                    handleEditUser={handleEditUser}
                    isAdmin={isAdmin}
                  />
                ))}
              </ListWrapper>
            )}
          </>
        )}
      </WithLoader>
    </Wrapper>
  );
};
