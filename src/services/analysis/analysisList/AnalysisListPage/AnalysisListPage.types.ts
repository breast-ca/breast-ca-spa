import { AnalysisResponseDto, AnalysisTranslatesDto } from "@/api/shared";

export type Props = {
  isLoading: boolean;
  analysisList: AnalysisResponseDto[];
  analysisTranslates: AnalysisTranslatesDto;
};
