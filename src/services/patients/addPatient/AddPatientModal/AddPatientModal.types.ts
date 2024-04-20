import {
  CreatePatientDto,
  EditPatientDto,
  PatientFullResponseDto,
} from "@/api/shared";

export type Props = {
  isOpen: boolean;
  handleClose: () => void;
  edit?: boolean;
  handleCreatePatinet: (payload: CreatePatientDto) => void;
  payload: PatientFullResponseDto | null;
  editPatient: (
    payload: EditPatientDto & {
      id: number;
    }
  ) => void;
};
