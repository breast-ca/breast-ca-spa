import {
  AnalysisPayloadResponseDto,
  AnalysisTranslatesDto,
} from "@/api/shared";

export type Props = {
  analysis: AnalysisPayloadResponseDto;
  analysisTranslates: AnalysisTranslatesDto;
};
