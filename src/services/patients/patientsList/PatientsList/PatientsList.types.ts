import { ResponsePatientDto } from "@/api/shared";

export type Props = {
  handleAddPatient: () => void;
  patientsList: ResponsePatientDto[] | null;
  isLoading: boolean;
};
