import { FC, ReactNode, useMemo } from "react";
import { Description, Wrapper } from "./AnalysisPayload.styled";
import { Props } from "./AnalysisPayload.types";
import { AnalysisType } from "@/api/shared";
import { UltrasoundView } from "./UltrasoundView";
import { Divider } from "antd";

export const AnalysisPayload: FC<Props> = ({
  analysis,
  analysisTranslates,
}) => {
  const payloadView = useMemo(() => {
    const forms: {
      [key in keyof typeof AnalysisType]: ReactNode | null;
    } = {
      [AnalysisType.Ultrasound]: analysis.Ultrasound ? (
        <UltrasoundView
          ultrasound={analysis.Ultrasound}
          analysisTranslates={analysisTranslates}
        />
      ) : null,
      [AnalysisType.Biopsy]: null,
      [AnalysisType.BloodBiochemistry]: null,
      [AnalysisType.BoneScan]: null,
      [AnalysisType.CommonBloodAnalysis]: null,
      [AnalysisType.CommonUrineAnalysis]: null,
      [AnalysisType.ComputerTomography]: null,
      [AnalysisType.MRI]: null,
      [AnalysisType.Mammography]: null,
      [AnalysisType.Markers]: null,
      [AnalysisType.PETCT]: null,
      [AnalysisType.XRay]: null,
    };

    return forms[analysis.analysisType];
  }, [analysis.Ultrasound, analysis.analysisType, analysisTranslates]);

  return (
    <Wrapper>
      {payloadView}
      <Divider
        style={{
          marginBottom: 12,
          width: "calc(100% + 32px)",
          transform: "translateX(-16px)",
        }}
      >
        Заключение
      </Divider>
      <Description>{analysis.description}</Description>
    </Wrapper>
  );
};
