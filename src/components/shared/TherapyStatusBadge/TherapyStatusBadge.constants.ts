import { TherapyStatus } from "@/api/shared";

export const TherapyStatusTranslatesLookup: {
  [key in keyof typeof TherapyStatus]: string;
} = {
  [TherapyStatus.Started]: "Начато",
  [TherapyStatus.Done]: "Завершено",
  [TherapyStatus.Canceled]: "Отменено",
};

export const TherapyStatusColorsLookup: {
  [key in keyof typeof TherapyStatus]: string;
} = {
  [TherapyStatus.Started]: "#ff7300",
  [TherapyStatus.Done]: "#0aa94a",
  [TherapyStatus.Canceled]: "#7c47e6",
};
