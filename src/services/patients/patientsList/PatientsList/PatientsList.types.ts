import { PatientsListResponseDto } from "@/api/shared";

export type Props = {
  handleAddPatient: () => void;
  patientsList: PatientsListResponseDto | null;
  isLoading: boolean;
  pageSize: number;
  pageNumber: number;
  setPageNumber: (payload: number) => void;
};
