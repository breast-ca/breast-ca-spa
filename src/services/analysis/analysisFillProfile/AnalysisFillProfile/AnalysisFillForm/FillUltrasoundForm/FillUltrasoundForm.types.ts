import { AnalysisTranslatesDto } from "@/api/shared";
import { FillAnalysisOmit } from "../AnalysisFillForm.types";

export type FillProps = {
  analysisTranslates: AnalysisTranslatesDto;
  pushFillAnalysisPayload: (payload: FillAnalysisOmit) => void;
};
