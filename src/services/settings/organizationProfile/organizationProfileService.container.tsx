import { useUnit } from "effector-react";
import { OrganizationProfile } from "./OrganizationProfile";
import {
  organizationQuery,
  usersListQuery,
} from "./organizationProfileService.api";
import { organizationProfileService } from ".";
import { userQuery } from "@/services/user/userService.api";
import { RoleType } from "@/api/shared";
import { userService } from "@/services/user";

const {
  gates: { OrganizationGate },
} = organizationProfileService;

const {
  gates: { UserGate },
} = userService;

export const OrganizationProfileContainer = () => {
  const { organization, isLoading, user, usersList } = useUnit({
    organization: organizationQuery.$data,
    isLoading: organizationQuery.$pending,
    user: userQuery.$data,
    usersList: usersListQuery.$data,
  });

  const isAdmin = user?.roles?.includes(RoleType.HeadPhysician) || false;

  return (
    <>
      <UserGate />
      <OrganizationGate />
      <OrganizationProfile
        organization={organization}
        isLoading={isLoading}
        isAdmin={isAdmin}
        usersList={usersList || []}
      />
    </>
  );
};
