import { useUnit } from "effector-react";
import { AnalysisListPage } from "./AnalysisListPage";
import { analysisListService } from "./analysisListService.model";
import { analysisListQuery } from "./analysisListService.api";
import { AnalysisTranslatesQuery } from "../analysisService.api";
import { analysisService } from "../analysisService.model";

const {
  gates: { AnalysisListGate },
} = analysisListService;

const {
  gates: { AnalysisTranslatesGate },
} = analysisService;

export const AnalysisListContainer = () => {
  const { analysisList, isLoading, analysisTranslates } = useUnit({
    analysisList: analysisListQuery.$data,
    isLoading: analysisListQuery.$pending,
    analysisTranslates: AnalysisTranslatesQuery.$data,
  });

  return (
    <>
      <AnalysisListGate />
      <AnalysisTranslatesGate />
      {analysisTranslates && (
        <AnalysisListPage
          analysisList={analysisList || []}
          isLoading={isLoading}
          analysisTranslates={analysisTranslates}
        />
      )}
    </>
  );
};
