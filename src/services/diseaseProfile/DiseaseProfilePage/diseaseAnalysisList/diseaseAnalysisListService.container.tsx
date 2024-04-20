import { FC } from "react";
import { DiseaseAnalysisListProps } from "./diseaseAnalysisListService.types";
import { diseaseAnalysisListService } from "./diseaseAnalysisListService.model";
import { useUnit } from "effector-react";
import { diseaseAnalysisQuery } from "./diseaseAnalysisListService.api";
import { DiseaseAnalysisList } from "./DiseaseAnalysisList";

const {
  gates: { DiseaseAnalysisGate },
} = diseaseAnalysisListService;

export const DiseaseAnalysisListContainer: FC<DiseaseAnalysisListProps> = ({
  diseaseId,
}) => {
  const { analysisList, isLoading } = useUnit({
    analysisList: diseaseAnalysisQuery.$data,
    isLoading: diseaseAnalysisQuery.$pending,
  });

  return (
    <>
      <DiseaseAnalysisGate diseaseId={diseaseId} />
      <DiseaseAnalysisList
        analysisList={analysisList || []}
        isLoading={isLoading}
      />
    </>
  );
};
