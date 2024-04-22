import {
  AnalysisPayloadResponseDto,
  AnalysisTranslatesDto,
} from "@/api/shared";

export type Props = {
  analysisList: AnalysisPayloadResponseDto[];
  isLoading: boolean;
  analysisTranslates: AnalysisTranslatesDto;
};
