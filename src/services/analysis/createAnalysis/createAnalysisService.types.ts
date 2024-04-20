import { AnalysisTranslatesDto, CreateAnalysisDto } from "@/api/shared";

export type CreateAnalysisContainerProps = {
  AnalysisTranslates: AnalysisTranslatesDto;
  diseaseId: number;
};

export interface CreateAnalisisRequestPayload extends CreateAnalysisDto {
  diseaseId: number;
}
