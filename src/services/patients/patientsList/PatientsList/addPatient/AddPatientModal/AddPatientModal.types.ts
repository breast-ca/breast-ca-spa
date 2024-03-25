import { CreatePatientDto } from "@/api/shared";

export type Props = {
  isOpen: boolean;
  handleClose: () => void;
  handleCreatePatinet: (payload: CreatePatientDto) => void;
};
