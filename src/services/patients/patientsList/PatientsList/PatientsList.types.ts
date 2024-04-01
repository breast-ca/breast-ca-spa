import { PatientResponseDto } from "@/api/shared";

export type Props = {
  handleAddPatient: () => void;
  patientsList: PatientResponseDto[] | null;
  isLoading: boolean;
};
