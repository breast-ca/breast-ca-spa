import {
  AnalysisPagedListResponseDto,
  AnalysisTranslatesDto,
} from "@/api/shared";

export type Props = {
  isLoading: boolean;
  analysisPagedList: AnalysisPagedListResponseDto | null;
  analysisTranslates: AnalysisTranslatesDto;
  pageSize: number;
  pageNumber: number;
  setPageNumber: (payload: number) => void;
};
