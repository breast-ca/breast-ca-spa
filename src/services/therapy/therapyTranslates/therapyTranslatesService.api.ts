import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { TherapiesTranslateDto } from "@/api/shared";

export const therapyTranslatesQuery = createQuery<
  [void],
  TherapiesTranslateDto
>({
  handler: () => axios.get("therapy/translates"),
});
