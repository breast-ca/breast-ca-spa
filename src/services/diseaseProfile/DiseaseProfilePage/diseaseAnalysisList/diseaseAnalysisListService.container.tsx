import { FC } from "react";
import { DiseaseAnalysisListProps } from "./diseaseAnalysisListService.types";
import { diseaseAnalysisListService } from "./diseaseAnalysisListService.model";
import { useUnit } from "effector-react";
import {
  diseaseAnalysisQuery,
  startAnalysisConsillium,
} from "./diseaseAnalysisListService.api";
import { DiseaseAnalysisList } from "./DiseaseAnalysisList";
import { AnalysisTranslatesQuery } from "@/services/analysis/analysisService.api";

const {
  gates: { DiseaseAnalysisGate },
} = diseaseAnalysisListService;

export const DiseaseAnalysisListContainer: FC<DiseaseAnalysisListProps> = ({
  diseaseId,
}) => {
  const { analysisList, isLoading, analysisTranslates, startConsillium } =
    useUnit({
      analysisList: diseaseAnalysisQuery.$data,
      isLoading: diseaseAnalysisQuery.$pending,
      analysisTranslates: AnalysisTranslatesQuery.$data,
      startConsillium: startAnalysisConsillium.start,
    });

  if (!analysisTranslates) return null;

  return (
    <>
      <DiseaseAnalysisGate diseaseId={diseaseId} />
      <DiseaseAnalysisList
        analysisList={analysisList || []}
        isLoading={isLoading}
        analysisTranslates={analysisTranslates}
        startConsillium={startConsillium}
      />
    </>
  );
};
