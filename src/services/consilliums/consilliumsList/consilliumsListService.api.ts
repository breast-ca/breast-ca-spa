import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { ConsilliumsListType } from "./consilliumsListService.types";
import { ConsilliumResponseDto } from "@/api/shared";

export const consilliumsListQuery = createQuery<
  [ConsilliumsListType],
  ConsilliumResponseDto[]
>({
  handler: (type) => axios.get(`consillium/${type}`),
});
