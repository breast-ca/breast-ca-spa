import { useUnit } from "effector-react";
import { AnalysisListPage } from "./AnalysisListPage";
import { analysisListService } from "./analysisListService.model";
import { analysisListQuery } from "./analysisListService.api";
import { AnalysisTranslatesQuery } from "../analysisService.api";
import { analysisService } from "../analysisService.model";

const {
  outputs,
  inputs,
  gates: { AnalysisListGate },
} = analysisListService;

const {
  gates: { AnalysisTranslatesGate },
} = analysisService;

export const AnalysisListContainer = () => {
  const {
    analysisPagedList,
    isLoading,
    analysisTranslates,
    pageSize,
    pageNumber,
    setPageNumber,
  } = useUnit({
    analysisPagedList: analysisListQuery.$data,
    isLoading: analysisListQuery.$pending,
    analysisTranslates: AnalysisTranslatesQuery.$data,
    pageNumber: outputs.$pageNumber,
    pageSize: outputs.$pageSize,
    setPageNumber: inputs.setPageNumber,
  });

  return (
    <>
      <AnalysisListGate />
      <AnalysisTranslatesGate />
      {analysisTranslates && (
        <AnalysisListPage
          analysisPagedList={analysisPagedList}
          isLoading={isLoading}
          analysisTranslates={analysisTranslates}
          pageSize={pageSize}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      )}
    </>
  );
};
