import { AnalysisStatus } from "@/api/shared";

export interface AnalysisListQuery {
  pageSize: number;
  pageNumber: number;
  firstName: string;
  lastName: string;
  middleName: string;
  status: AnalysisStatus | null;
}

export type AnalysisListSearchForm = Omit<
  AnalysisListQuery,
  "pageSize" | "pageNumber"
>;
