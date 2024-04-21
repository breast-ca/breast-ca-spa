import {
  AnalysisPagedListResponseDto,
  AnalysisTranslatesDto,
} from "@/api/shared";

export type Props = {
  isLoading: boolean;
  analysisPagedList: AnalysisPagedListResponseDto | null;
  analysisTranslates: AnalysisTranslatesDto;
};
