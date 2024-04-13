export interface PatientsListQuery {
  pageSize: number;
  pageNumber: number;
  firstName: string;
  lastName: string;
  middleName: string;
}

export type PatientsListSearchForm = Pick<
  PatientsListQuery,
  "firstName" | "lastName" | "middleName"
>;
