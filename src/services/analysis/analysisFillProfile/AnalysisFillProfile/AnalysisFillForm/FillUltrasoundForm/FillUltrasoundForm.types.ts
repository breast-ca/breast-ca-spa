import { AnalysisTranslatesDto } from "@/api/shared";
import { AnalysisFillPayload } from "../../../analysisFillProfileService.types";

export type FillProps = {
  analysisTranslates: AnalysisTranslatesDto;
  pushFillAnalysisPayload: (payload: AnalysisFillPayload) => void;
};
