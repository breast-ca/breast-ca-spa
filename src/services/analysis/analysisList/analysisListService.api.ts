import { createQuery } from "@farfetched/core";
import { axios } from "@/api";

export const getAnalysisListQuery = createQuery({
  handler: () => axios.get("/analysis"),
});
