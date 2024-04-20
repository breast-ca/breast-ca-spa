import { FC } from "react";
import { DiseaseAnalysisListProps } from "./diseaseAnalysisListService.types";
import { diseaseAnalysisListService } from "./diseaseAnalysisListService.model";
import { useUnit } from "effector-react";
import { diseaseAnalysisQuery } from "./diseaseAnalysisListService.api";
import { DiseaseAnalysisList } from "./DiseaseAnalysisList";
import { AnalysisTranslatesQuery } from "@/services/analysis/analysisService.api";

const {
  gates: { DiseaseAnalysisGate },
} = diseaseAnalysisListService;

export const DiseaseAnalysisListContainer: FC<DiseaseAnalysisListProps> = ({
  diseaseId,
}) => {
  const { analysisList, isLoading, analysisTranslates } = useUnit({
    analysisList: diseaseAnalysisQuery.$data,
    isLoading: diseaseAnalysisQuery.$pending,
    analysisTranslates: AnalysisTranslatesQuery.$data,
  });

  if (!analysisTranslates) return null;

  return (
    <>
      <DiseaseAnalysisGate diseaseId={diseaseId} />
      <DiseaseAnalysisList
        analysisList={analysisList || []}
        isLoading={isLoading}
        analysisTranslates={analysisTranslates}
      />
    </>
  );
};
