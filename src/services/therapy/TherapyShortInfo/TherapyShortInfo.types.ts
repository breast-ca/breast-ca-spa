import { TherapiesTranslateDto, TherapyLightResponseDto } from "@/api/shared";

export type Props = {
  therapy: TherapyLightResponseDto;
  therapyTranslates: TherapiesTranslateDto;
  maxWidth?: number;
};
