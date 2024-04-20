import { FC } from "react";
import { Wrapper } from "./DiseaseAnalysisList.styled";
import { Props } from "./DiseaseAnalysisList.types";
import { WithLoader } from "@/components/WithLoader";
import { AnalysisCard } from "@/services/analysis/AnalysisCard";
import { Empty } from "antd";

export const DiseaseAnalysisList: FC<Props> = ({
  analysisList,
  isLoading,
  analysisTranslates,
}) => {
  return (
    <Wrapper>
      <WithLoader isLoading={isLoading}>
        {!analysisList.length && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
        {analysisList.map((analysis) => (
          <AnalysisCard
            key={analysis.id}
            analysis={analysis}
            analysisTranslates={analysisTranslates}
          />
        ))}
      </WithLoader>
    </Wrapper>
  );
};
