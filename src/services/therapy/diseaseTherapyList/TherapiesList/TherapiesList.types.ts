import { TherapiesTranslateDto, TherapyLightResponseDto } from "@/api/shared";

export type Props = {
  therapies: TherapyLightResponseDto[];
  isLoading: boolean;
  therapiesTranslates: TherapiesTranslateDto;
};
