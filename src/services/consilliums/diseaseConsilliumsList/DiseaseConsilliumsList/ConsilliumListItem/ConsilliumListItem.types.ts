import {
  AnalysisTranslatesDto,
  ConsilliumResponseDto,
  TherapiesTranslateDto,
} from "@/api/shared";

export type Props = {
  consillium: ConsilliumResponseDto;
  analysisTranslates: AnalysisTranslatesDto;
  handleClick?: (id: number) => void;
  handleDistribute?: () => void;
  therapiesTranslates: TherapiesTranslateDto;
};
