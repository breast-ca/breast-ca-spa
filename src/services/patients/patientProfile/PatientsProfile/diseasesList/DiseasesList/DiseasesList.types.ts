import { DiseaseResponseDto, DiseaseTranslateDto } from "@/api/shared";

export type Props = {
  handleCreateDisease: () => void;
  diseasesList: DiseaseResponseDto[];
  isLoading: boolean;
  diseaseEnums: DiseaseTranslateDto;
};
