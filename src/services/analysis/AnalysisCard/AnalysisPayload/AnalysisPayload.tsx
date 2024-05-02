import { FC, ReactNode, useMemo } from "react";
import { Description, Wrapper } from "./AnalysisPayload.styled";
import { Props } from "./AnalysisPayload.types";
import { AnalysisType } from "@/api/shared";
import { UltrasoundView } from "./UltrasoundView";
import { Divider } from "antd";
import { MammographyView } from "./MammographyView";
import { BiopsyView } from "./BiopsyView";

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
      [AnalysisType.Biopsy]: analysis.Biopsy ? (
        <BiopsyView
          biopsy={analysis.Biopsy}
          analysisTranslates={analysisTranslates}
        />
      ) : null,
      [AnalysisType.BloodBiochemistry]: null,
      [AnalysisType.BoneScan]: null,
      [AnalysisType.CommonBloodAnalysis]: null,
      [AnalysisType.CommonUrineAnalysis]: null,
      [AnalysisType.ComputerTomography]: null,
      [AnalysisType.MRI]: null,
      [AnalysisType.Mammography]: analysis.Mammography ? (
        <MammographyView
          mammography={analysis.Mammography}
          analysisTranslates={analysisTranslates}
        />
      ) : null,
      [AnalysisType.Markers]: null,
      [AnalysisType.PETCT]: null,
      [AnalysisType.XRay]: null,
    };

    return forms[analysis.analysisType];
  }, [analysis, analysisTranslates]);

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
