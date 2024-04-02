import { PatientResponseDto } from "@/api/shared";

export type Props = {
  patient: PatientResponseDto;
  card?: boolean;
};
