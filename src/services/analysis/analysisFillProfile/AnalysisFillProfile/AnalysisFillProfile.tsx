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
import { AnalysisFillForm } from "./AnalysisFillForm";
import { AnalysisStatus } from "@/api/shared";
import { AnalysisCard } from "../../AnalysisCard";
import { Button } from "@/components/Button";
import { useNavigate } from "react-router-dom";

export const AnalysisFillProfile: FC<Props> = ({
  analysis,
  analysisTranslates,
  diseaseTranslates,
  handleSaveAnalysisFill,
  handleStartConsillium,
}) => {
  const [segment, setSegment] = useState<AnalysisProfileSegment>("analysis");

  const isReady = analysis.status !== AnalysisStatus.Awaiting;

  const navigate = useNavigate();

  return (
    <Wrapper>
      <PageHeader
        title={
          <Title>
            {analysisTranslates.analysis[analysis.analysisType]}
            <AnalysisStatusBadge status={analysis.status} />
          </Title>
        }
        goBack
      >
        {analysis.consillium?.id && (
          <Button
            onClick={() =>
              navigate(
                `/disease/${analysis.disease.id}/consiliums/${analysis.consillium?.id}`
              )
            }
            type="ghost"
          >
            Перейти в консилиум
          </Button>
        )}
      </PageHeader>

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
      {segment === "analysis" && (
        <>
          {!isReady && (
            <AnalysisFillForm
              analysis={analysis}
              analysisTranslates={analysisTranslates}
              handleSaveAnalysisFill={handleSaveAnalysisFill}
            />
          )}
          {isReady && (
            <AnalysisCard
              showTitle={false}
              analysis={analysis}
              analysisTranslates={analysisTranslates}
              handleCreateConsillium={handleStartConsillium}
            />
          )}
        </>
      )}
      {segment === "passport" && (
        <>
          <DiseaseTitle
            diseaseEnums={diseaseTranslates}
            disease={analysis.disease}
            isLink
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
