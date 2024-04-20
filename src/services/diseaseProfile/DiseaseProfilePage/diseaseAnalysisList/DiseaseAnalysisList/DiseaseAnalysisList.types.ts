import { AnalysisResponseDto, AnalysisTranslatesDto } from "@/api/shared";

export type Props = {
  analysisList: AnalysisResponseDto[];
  isLoading: boolean;
  analysisTranslates: AnalysisTranslatesDto;
};
