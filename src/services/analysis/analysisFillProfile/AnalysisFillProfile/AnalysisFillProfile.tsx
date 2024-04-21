import { FC, useState } from "react";
import { Title, Wrapper } from "./AnalysisFillProfile.styled";
import { AnalysisProfileSegment, Props } from "./AnalysisFillProfile.types";
import { PageHeader } from "@/components/PageHeader";
import {
  DiseaseInfos,
  DiseaseTitle,
} from "@/services/diseaseProfile/DiseaseProfilePage/DiseaseProfilePage";
import { Segmented } from "@/components/Segmented";
import { DiseaseCommonInfo } from "@/services/diseaseProfile/DiseaseProfilePage/DiseaseCommonInfo";

export const AnalysisFillProfile: FC<Props> = ({
  analysis,
  analysisTranslates,
  diseaseTranslates,
}) => {
  const [segment, setSegment] = useState<AnalysisProfileSegment>("analysis");

  return (
    <Wrapper>
      <PageHeader
        title={
          <Title>
            {analysisTranslates.analysis[analysis.analysisType]}
            <DiseaseTitle
              diseaseEnums={diseaseTranslates}
              disease={analysis.disease}
            />
          </Title>
        }
        goBack
      />
      <DiseaseInfos
        diseaseEnums={diseaseTranslates}
        disease={analysis.disease}
      />
      <Segmented
        value={segment}
        onChange={(value) => setSegment(value as AnalysisProfileSegment)}
        options={[
          {
            label: "Анализ",
            value: "analysis",
          },
          {
            label: "Паспорт заболевания",
            value: "passport",
          },
        ]}
      />
      {segment === "passport" && (
        <DiseaseCommonInfo
          disease={analysis.disease}
          diseaseEnums={diseaseTranslates}
        />
      )}
    </Wrapper>
  );
};
