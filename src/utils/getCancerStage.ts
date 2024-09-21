import { CancerStage } from "@/api/shared";

export const getCancerStage = (stage: CancerStage) => {
  return stage === CancerStage.Zero ? "0" : stage;
};
