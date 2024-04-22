import {
  AnalysisFullResponseDto,
  AnalysisTranslatesDto,
  DiseaseTranslateDto,
} from "@/api/shared";
import { AnalysisFillSavePayload } from "../analysisFillProfileService.types";

export type Props = {
  analysis: AnalysisFullResponseDto;
  analysisTranslates: AnalysisTranslatesDto;
  diseaseTranslates: DiseaseTranslateDto;
  handleSaveAnalysisFill: (payload: AnalysisFillSavePayload) => void;
};

export type AnalysisProfileSegment = "passport" | "analysis";
