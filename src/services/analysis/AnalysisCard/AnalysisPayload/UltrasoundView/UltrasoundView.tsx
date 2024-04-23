import { FC } from "react";
import { Wrapper } from "./UltrasoundView.styled";
import { Props } from "./UltrasoundView.types";
import { AnalysisParameter } from "../shared/AnalysisParameter";
import { ParametersGrid } from "../shared/ParametersGrid";
import { useUnit } from "effector-react";
import { diseaseEnumsTranslationsQuery } from "@/services/patients/patientProfile/PatientsProfile/diseasesList/diseasesListService.api";

export const UltrasoundView: FC<Props> = ({
  ultrasound,
  analysisTranslates,
}) => {
  const diseaseTranslates = useUnit(diseaseEnumsTranslationsQuery.$data);

  if (!diseaseTranslates) return null;

  return (
    <Wrapper>
      <ParametersGrid temp="1fr 1fr 1fr">
        <AnalysisParameter name="Размер опухоли">
          {ultrasound.tumorSize}мм
        </AnalysisParameter>
        <AnalysisParameter name="BIR">{ultrasound.birNumber}</AnalysisParameter>
        <AnalysisParameter name="Кол-во мтс">
          {ultrasound.metastasisNumber}
        </AnalysisParameter>
      </ParametersGrid>
      <ParametersGrid temp="1fr 2.05fr">
        <AnalysisParameter name="Сторона" fontSize={18}>
          {diseaseTranslates.sideTranslates[ultrasound.side]}
        </AnalysisParameter>
        <AnalysisParameter name="Описание" fontSize={18}>
          {analysisTranslates.ultrasoundDescription[ultrasound.description]}
        </AnalysisParameter>
      </ParametersGrid>
      <AnalysisParameter name="Область мтс" fontSize={16}>
        {ultrasound.relapseTypes
          .map((type) => diseaseTranslates.relapseTranslates[type])
          .join(", ")}
      </AnalysisParameter>
    </Wrapper>
  );
};
