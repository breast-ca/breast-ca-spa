import { AnalysisTranslatesDto, AnalysisType } from "@/api/shared";

export type Props = {
  analysisTranslates: AnalysisTranslatesDto;
  closeModal: () => void;
  isOpen: boolean;
  createAnalysis: (type: AnalysisType) => void;
};
