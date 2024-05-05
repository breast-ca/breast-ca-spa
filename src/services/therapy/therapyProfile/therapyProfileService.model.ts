import { createEvent, sample } from "effector";
import { createGate } from "effector-react";
import { endTherapyMutation, therapyQuery } from "./therapyProfileService.api";
import { message } from "antd";

const TherapyGate = createGate<{ id: number }>();

const refetch = createEvent();

const handleCancelTherapy = createEvent<"cancel" | "end">();

sample({
  clock: [refetch, TherapyGate.open, endTherapyMutation.finished.success],
  source: TherapyGate.state,
  fn: ({ id }) => id,
  target: therapyQuery.start,
});

const $therapyId = TherapyGate.state.map(({ id }) => id || null);

sample({
  source: $therapyId,
  filter: Boolean,
  clock: handleCancelTherapy,
  fn: (therapyId, action) => ({ therapyId, action }),
  target: endTherapyMutation.start,
});

endTherapyMutation.finished.success.watch(() =>
  message.success("Статус изменен!")
);

export const therapyProfileService = {
  inputs: { refetch, handleCancelTherapy },
  outputs: {},
  gates: { TherapyGate },
};
