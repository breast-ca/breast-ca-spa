import {
  CreatePatientDto,
  EditPatientDto,
  PatientResponseDto,
} from "@/api/shared";

export type Props = {
  isOpen: boolean;
  handleClose: () => void;
  edit?: boolean;
  handleCreatePatinet: (payload: CreatePatientDto) => void;
  payload: PatientResponseDto | null;
  editPatient: (
    payload: EditPatientDto & {
      id: number;
    }
  ) => void;
};
