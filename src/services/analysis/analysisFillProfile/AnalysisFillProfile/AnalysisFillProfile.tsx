import { FC } from "react";
import { Wrapper } from "./AnalysisFillProfile.styled";
import { Props } from "./AnalysisFillProfile.types";
import { PageHeader } from "@/components/PageHeader";

export const AnalysisFillProfile: FC<Props> = ({
  analysis,
  analysisTranslates,
}) => {
  return (
    <Wrapper>
      <PageHeader
        title={analysisTranslates.analysis[analysis.analysisType]}
        goBack
      />
    </Wrapper>
  );
};
