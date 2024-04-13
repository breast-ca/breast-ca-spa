import { Status } from "@/api/shared";

export interface PatientsListQuery {
  pageSize: number;
  pageNumber: number;
  firstName: string;
  lastName: string;
  middleName: string;
  individualInsurance: string;
  status: Status | null;
}

export type PatientsListSearchForm = Omit<
  PatientsListQuery,
  "pageSize" | "pageNumber"
>;
