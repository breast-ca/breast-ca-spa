import { ConsilliumStatus } from "@/api/shared";

export const ConsilliumStatusTranslatesLookup: {
  [key in keyof typeof ConsilliumStatus]: string;
} = {
  [ConsilliumStatus.AwaitingDistribution]: "Ожидает распределение",
  [ConsilliumStatus.Working]: "В процессе",
  [ConsilliumStatus.Done]: "Завершен",
};

export const ConsilliumStatusColorsLookup: {
  [key in keyof typeof ConsilliumStatus]: string;
} = {
  [ConsilliumStatus.AwaitingDistribution]: "#ff7300",
  [ConsilliumStatus.Working]: "#0aa94a",
  [ConsilliumStatus.Done]: "#ff6b6b",
};
