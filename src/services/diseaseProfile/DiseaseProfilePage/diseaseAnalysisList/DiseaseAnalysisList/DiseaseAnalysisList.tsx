import { FC } from "react";
import { Wrapper } from "./DiseaseAnalysisList.styled";
import { Props } from "./DiseaseAnalysisList.types";
import { WithLoader } from "@/components/WithLoader";

export const DiseaseAnalysisList: FC<Props> = ({ analysisList, isLoading }) => {
  return (
    <Wrapper>
      <WithLoader isLoading={isLoading}>
        {analysisList.map((e) => (
          <h1>{e.analysisType}</h1>
        ))}
      </WithLoader>
    </Wrapper>
  );
};
