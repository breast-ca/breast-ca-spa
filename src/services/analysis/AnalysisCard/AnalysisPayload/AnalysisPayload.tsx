import { FC, ReactNode, useMemo } from "react";
import { Wrapper } from "./AnalysisPayload.styled";
import { Props } from "./AnalysisPayload.types";
import { AnalysisType } from "@/api/shared";
import { UltrasoundView } from "./UltrasoundView";

export const AnalysisPayload: FC<Props> = ({ analysis }) => {
  const payloadView = useMemo(() => {
    const forms: {
      [key in keyof typeof AnalysisType]: ReactNode | null;
    } = {
      [AnalysisType.Ultrasound]: (
        <UltrasoundView ultrasound={analysis.Ultrasound} />
      ),
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
  }, [analysis]);

  return <Wrapper>{payloadView}</Wrapper>;
};
