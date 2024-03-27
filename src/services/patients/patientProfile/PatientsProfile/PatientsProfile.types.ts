import { ResponsePatientDto } from "@/api/shared";

export type Props = {
  patient: ResponsePatientDto | null;
  isLoading: boolean;
};
