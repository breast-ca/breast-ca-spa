import { AnalysisStatus } from "@/api/shared";

export const AnalysisStatusTranslatesLookup: {
  [key in keyof typeof AnalysisStatus]: string;
} = {
  [AnalysisStatus.Awaiting]: "Ожидает",
  [AnalysisStatus.Ready]: "Готов",
  [AnalysisStatus.Consilium]: "Консилиум",
  [AnalysisStatus.Done]: "Завершен",
};

export const AnalysisStatusColorsLookup: {
  [key in keyof typeof AnalysisStatus]: string;
} = {
  [AnalysisStatus.Awaiting]: "#ff7300",
  [AnalysisStatus.Ready]: "#0aa94a",
  [AnalysisStatus.Consilium]: "#7c47e6",
  [AnalysisStatus.Done]: "#ff6b6b",
};
