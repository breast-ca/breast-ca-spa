import { useUnit } from "effector-react";
import { OrganizationProfile } from "./OrganizationProfile";
import { organizationQuery } from "./organizationProfileService.api";
import { organizationProfileService } from ".";

const {
  gates: { OrganizationGate },
} = organizationProfileService;

export const OrganizationProfileContainer = () => {
  const { organization, isLoading } = useUnit({
    organization: organizationQuery.$data,
    isLoading: organizationQuery.$pending,
  });

  return (
    <>
      <OrganizationGate />
      <OrganizationProfile organization={organization} isLoading={isLoading} />
    </>
  );
};
