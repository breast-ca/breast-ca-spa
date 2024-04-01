import { PatientResponseDto } from "@/api/shared";

export type Props = {
  patient: PatientResponseDto | null;
  isLoading: boolean;
  handleEdit: (payload: void | PatientResponseDto) => void;
};
