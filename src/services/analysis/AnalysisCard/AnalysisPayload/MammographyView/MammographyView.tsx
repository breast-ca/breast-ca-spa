import { FC } from "react";
import { Wrapper } from "./MammographyView.styled";
import { Props } from "./MammographyView.types";
import { diseaseEnumsTranslationsQuery } from "@/services/patients/patientProfile/PatientsProfile/diseasesList/diseasesListService.api";
import { ParametersGrid } from "../shared/ParametersGrid";
import { AnalysisParameter } from "../shared/AnalysisParameter";
import { useUnit } from "effector-react";

export const MammographyView: FC<Props> = ({
  mammography,
  analysisTranslates,
}) => {
  const diseaseTranslates = useUnit(diseaseEnumsTranslationsQuery.$data);

  if (!diseaseTranslates) return null;

  return (
    <Wrapper>
      <ParametersGrid temp="1fr 1fr 1fr">
        <AnalysisParameter name="Размер опухоли">
          {mammography.tumorSize.sizeX}мм {mammography.tumorSize.sizeY}мм{" "}
          {mammography.tumorSize.sizeZ}мм
        </AnalysisParameter>
        <AnalysisParameter name="BIR">
          {mammography.birNumber}
        </AnalysisParameter>
        <AnalysisParameter name="Кол-во мтс">
          {mammography.metastasisNumber}
        </AnalysisParameter>
      </ParametersGrid>
      <ParametersGrid temp="1fr 2.05fr">
        <AnalysisParameter name="Сторона" fontSize={18}>
          {diseaseTranslates.sideTranslates[mammography.side]}
        </AnalysisParameter>
        <AnalysisParameter name="Описание" fontSize={18}>
          {analysisTranslates.ultrasoundDescription[mammography.description]}
        </AnalysisParameter>
      </ParametersGrid>
      <AnalysisParameter name="Область мтс" fontSize={16}>
        {mammography.relapseTypes
          .map((type) => diseaseTranslates.relapseTranslates[type])
          .join(", ")}
      </AnalysisParameter>
    </Wrapper>
  );
};
