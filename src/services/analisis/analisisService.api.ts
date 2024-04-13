import { createQuery } from "@farfetched/core";
import { axios } from "@/api";
import { AnalisisTranslatesDto } from "@/api/shared";

export const analisisTranslatesQuery = createQuery({
  handler: (): Promise<AnalisisTranslatesDto> =>
    axios.get("/analysis/translates"),
});
