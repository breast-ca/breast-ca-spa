import {
  CancerStage,
  DiseaseResponseDto,
  DiseaseTranslateDto,
  TNMResponseDTO,
} from "@/api/shared";
import { getCancerStage } from "@/utils/getCancerStage";

export function getDiseasInfos(
  disease: DiseaseResponseDto & { tnm?: TNMResponseDTO; stage?: CancerStage },
  translates: DiseaseTranslateDto
) {
  
  let tnmText = "";

  if (disease.tnm) {
    const { type, T, N, M } = disease.tnm;

    const tText = T ? `T${T}` : "";
    const nText = N ? `N${N}` : "";
    const mText = M ? `M${M}` : "";

    tnmText = `${type?.toLowerCase()}${tText}${nText}${mText}`;
  }

  const res = [
    ...(tnmText ? [tnmText] : []),
    `№${disease.number}`,
    translates.sideTranslates[disease.side],
    translates.tumorStateTranslates[disease.tumorState],
    ...(disease.stage ? [`Стадия: ${getCancerStage(disease.stage)}`] : []),
  ];

  return res;
}
