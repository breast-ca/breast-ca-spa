import {
  CreatePatientDto,
  EditPatientDto,
  ResponsePatientDto,
} from "@/api/shared";

export type Props = {
  isOpen: boolean;
  handleClose: () => void;
  edit?: boolean;
  handleCreatePatinet: (payload: CreatePatientDto) => void;
  payload: ResponsePatientDto | null;
  editPatient: (
    payload: EditPatientDto & {
      id: number;
    }
  ) => void;
};
