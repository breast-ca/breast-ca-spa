import { PatientFullResponseDto } from "@/api/shared";

export type PatientSegment = "common" | "disease";

export type Props = {
  patient: PatientFullResponseDto | null;
  isLoading: boolean;
  handleEdit: (payload: void | PatientFullResponseDto) => void;
  segment?: PatientSegment;
  handleChangeSegment: (segment: PatientSegment) => void;
};
