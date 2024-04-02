import { PatientResponseDto } from "@/api/shared";

export type PatientSegment = "common" | "disease"

export type Props = {
  patient: PatientResponseDto | null;
  isLoading: boolean;
  handleEdit: (payload: void | PatientResponseDto) => void;
  segment?: PatientSegment;
  handleChangeSegment: (segment: PatientSegment) => void;
};
