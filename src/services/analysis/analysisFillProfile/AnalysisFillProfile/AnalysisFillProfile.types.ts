import { AnalysisFullResponseDto, AnalysisTranslatesDto, DiseaseTranslateDto } from "@/api/shared";

export type Props = {
  analysis: AnalysisFullResponseDto;
  analysisTranslates: AnalysisTranslatesDto;
  diseaseTranslates: DiseaseTranslateDto;
};

export type AnalysisProfileSegment = "passport" | "analysis";