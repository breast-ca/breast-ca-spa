import { OrganizationResponseDto } from "@/api/shared";

export type Props = {
  isOpen: boolean;
  handleClose: () => void;
  organization: OrganizationResponseDto;
};
