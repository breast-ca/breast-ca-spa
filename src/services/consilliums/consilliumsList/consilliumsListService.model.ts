import { createStoreUnit } from "@/lib/effector";
import { ConsilliumsListType } from "./consilliumsListService.types";
import { createGate } from "effector-react";
import { sample } from "effector";
import { consilliumsListQuery } from "./consilliumsListService.api";

const ConsilliumsGate = createGate();

const [$consilliumsViewType, setConsilliumsViewType, reset] = createStoreUnit(
  ConsilliumsListType.Member
);

sample({
  clock: ConsilliumsGate.close,
  target: reset,
});

sample({
  clock: [ConsilliumsGate.open, $consilliumsViewType],
  source: $consilliumsViewType,
  target: consilliumsListQuery.start,
});

export const consilliumsListService = {
  inputs: { setConsilliumsViewType },
  outputs: { $consilliumsViewType },
  gates: { ConsilliumsGate },
};
