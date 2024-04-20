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
  [AnalysisStatus.Awaiting]: "#ffc400",
  [AnalysisStatus.Ready]: "#00963c",
  [AnalysisStatus.Consilium]: "#5500ff",
  [AnalysisStatus.Done]: "#494949",
};
