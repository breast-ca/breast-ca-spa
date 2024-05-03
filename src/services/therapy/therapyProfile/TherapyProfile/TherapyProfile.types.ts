import { TherapiesTranslateDto, TherapyFullResponseDto } from "@/api/shared";

export type Props = {
  isLoading: boolean;
  therapy: TherapyFullResponseDto | null;
  therapyTranslates: TherapiesTranslateDto;
};
