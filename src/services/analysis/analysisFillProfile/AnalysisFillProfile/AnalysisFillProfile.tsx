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
import { AnalysisStatusBadge } from "@/components/shared/AnalysisStatus";

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
            <AnalysisStatusBadge status={analysis.analysisStatus} />
          </Title>
        }
        goBack
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
        <>
          <DiseaseTitle
            diseaseEnums={diseaseTranslates}
            disease={analysis.disease}
          />
          <DiseaseInfos
            diseaseEnums={diseaseTranslates}
            disease={analysis.disease}
          />
          <DiseaseCommonInfo
            disease={analysis.disease}
            diseaseEnums={diseaseTranslates}
          />
        </>
      )}
    </Wrapper>
  );
};
