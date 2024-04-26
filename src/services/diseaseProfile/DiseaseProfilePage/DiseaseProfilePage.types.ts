import { DiseaseFullResponseDto, DiseaseTranslateDto } from "@/api/shared";

export type Props = {
  disease: DiseaseFullResponseDto | null;
  isLoading: boolean;
  diseaseEnums: DiseaseTranslateDto;
  handleEdit: () => void;
  handleCreateAnalysis: () => void;
  handleUpdateTNM: () => void;
};

export type DiseaseProfileSegment =
  | "common"
  | "therapy"
  | "analysis"
  | "consiliums";
