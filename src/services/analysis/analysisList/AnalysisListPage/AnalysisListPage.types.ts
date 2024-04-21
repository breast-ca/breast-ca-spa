import { AnalysisListResponseDto, AnalysisTranslatesDto } from "@/api/shared";

export type Props = {
  isLoading: boolean;
  analysisList: AnalysisListResponseDto[];
  analysisTranslates: AnalysisTranslatesDto;
};
