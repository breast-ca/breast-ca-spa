import { DiseaseFullResponseDto, DiseaseTranslateDto } from "@/api/shared";

export type Props = {
  disease: DiseaseFullResponseDto;
  diseaseEnums: DiseaseTranslateDto;
};
