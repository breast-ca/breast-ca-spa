import { DiseaseFullResponseDto, DiseaseTranslateDto } from "@/api/shared";

export type Props = {
  disease: DiseaseFullResponseDto | null;
  isLoading: boolean;
  diseaseEnums: DiseaseTranslateDto;
  handleEdit: () => void;
};
