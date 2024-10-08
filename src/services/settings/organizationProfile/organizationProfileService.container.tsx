import { useUnit } from "effector-react";
import { OrganizationProfile } from "./OrganizationProfile";
import {
  editOrganizationMutation,
  organizationQuery,
  usersListQuery,
} from "./organizationProfileService.api";
import { organizationProfileService } from ".";
import { userQuery } from "@/services/user/userService.api";
import { RoleType } from "@/api/shared";
import { userService } from "@/services/user";
import { EditOrganizationModal } from "./EditOrganizationModal";

const {
  gates: { OrganizationGate },
} = organizationProfileService;

const {
  gates: { UserGate },
} = userService;

export const OrganizationProfileContainer = () => {
  const {
    organization,
    isLoading,
    user,
    usersList,
    isEditModalOpen,
    closeEditModal,
    handleEditOrganization,
  } = useUnit({
    organization: organizationQuery.$data,
    isLoading: organizationQuery.$pending,
    user: userQuery.$data,
    usersList: usersListQuery.$data,
    isEditModalOpen: organizationProfileService.outputs.$isEditModalOpen,
    closeEditModal: organizationProfileService.inputs.closeEditModal,
    handleEditOrganization: editOrganizationMutation.start,
  });

  const isAdmin = user?.roles?.includes(RoleType.HeadPhysician) || false;

  return (
    <>
      <UserGate />
      <OrganizationGate />
      {organization && (
        <EditOrganizationModal
          isOpen={isEditModalOpen}
          handleClose={closeEditModal}
          organization={organization}
          handleEditOrganization={handleEditOrganization}
        />
      )}
      <OrganizationProfile
        organization={organization}
        isLoading={isLoading}
        isAdmin={isAdmin}
        usersList={usersList || []}
      />
    </>
  );
};
