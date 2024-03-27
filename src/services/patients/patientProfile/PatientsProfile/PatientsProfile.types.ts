import { ResponsePatientDto } from "@/api/shared";

export type Props = {
  patient: ResponsePatientDto | null;
  isLoading: boolean;
  handleEdit: (payload: void | ResponsePatientDto) => void;
};
