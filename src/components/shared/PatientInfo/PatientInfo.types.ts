import { PatientFullResponseDto } from "@/api/shared";

export type Props = {
  patient: PatientFullResponseDto;
  handleEdit?: () => void;
};
