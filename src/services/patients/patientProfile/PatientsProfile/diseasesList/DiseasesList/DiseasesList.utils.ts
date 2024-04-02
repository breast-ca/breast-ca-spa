import { DiseaseResponseDto, DiseaseTranslateDto } from "@/api/shared";

export function getDisesasInfos(
  disease: DiseaseResponseDto,
  translates: DiseaseTranslateDto
) {
  const res = [
    `№${disease.number}`,
    translates.sideTranslates[disease.side],
    translates.tumorStateTranslates[disease.tumorState],
  ];

  return res;
}
