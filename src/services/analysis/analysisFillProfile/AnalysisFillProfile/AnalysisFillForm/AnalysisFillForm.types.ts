import { AnalysisFullResponseDto, AnalysisTranslatesDto } from "@/api/shared";
import { AnalysisFillSavePayload } from "../../analysisFillProfileService.types";

export type Props = {
  analysis: AnalysisFullResponseDto;
  analysisTranslates: AnalysisTranslatesDto;
  handleSaveAnalysisFill: (payload: AnalysisFillSavePayload) => void;
};

export type FillAnalysisOmit = Omit<
  AnalysisFillSavePayload,
  "analysisEditPayload"
>;
