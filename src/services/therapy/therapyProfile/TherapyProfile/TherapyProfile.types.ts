import {
  AnalysisTranslatesDto,
  AnalysisType,
  DiseaseTranslateDto,
  TherapiesTranslateDto,
  TherapyFullResponseDto,
} from "@/api/shared";

export type Props = {
  isLoading: boolean;
  therapy: TherapyFullResponseDto | null;
  therapyTranslates: TherapiesTranslateDto;
  diseaseTranslates: DiseaseTranslateDto;
  handleEdit: () => void;
  handleCancelTherapy: (payload: "cancel" | "end") => void;
  handleCreateConsillium: () => void;
  handleCreateAnalysis: (type: AnalysisType) => void;
  analysisTranslates: AnalysisTranslatesDto;
};
