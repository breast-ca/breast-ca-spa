import { FC } from "react";
import { Title, Wrapper } from "./BiopsyView.styled";
import { Props } from "./BiopsyView.types";
import { ParametersGrid } from "../shared/ParametersGrid";
import { AnalysisParameter } from "../shared/AnalysisParameter";
import { BooleanStatus } from "@/components/BooleanStatus";

export const BiopsyView: FC<Props> = ({ biopsy, analysisTranslates }) => {
  const { gystology, igh, isPostOperational } = biopsy;

  return (
    <Wrapper>
      <Title>Гистология:</Title>
      <ParametersGrid temp={isPostOperational ? "1fr 1fr" : "1fr"}>
        <AnalysisParameter name="гистологическое строение опухоли">
          {analysisTranslates.histotypeCorrection[gystology.histotype]}{" "}
          <span style={{ fontSize: 14, color: "#484848" }}>
            {analysisTranslates.histotypeDescription[gystology.histotype]}
          </span>
        </AnalysisParameter>
        {isPostOperational && (
          <AnalysisParameter name="Расстояние до ближайшего края резекции">
            {gystology.resectionDistance}мм
          </AnalysisParameter>
        )}
      </ParametersGrid>
      {isPostOperational && (
        <>
          <ParametersGrid temp="1fr 1fr 1fr">
            <AnalysisParameter name="Размер опухоли">
              {gystology.tumorSize?.sizeX}*{gystology.tumorSize?.sizeY}*
              {gystology.tumorSize?.sizeZ}мм
            </AnalysisParameter>
            <AnalysisParameter name="Наличие раковых клеток">
              <BooleanStatus status={Boolean(gystology.resectionEdgeState)} />
            </AnalysisParameter>
            <AnalysisParameter name="Внутрипротоковый компонент">
              <BooleanStatus
                status={Boolean(gystology.havingDuctalComponent)}
              />
            </AnalysisParameter>
          </ParametersGrid>
          <ParametersGrid temp="1fr 1fr">
            <AnalysisParameter name="Степень дифференцировки опухоли">
              {gystology.tumorDifferentiation}
            </AnalysisParameter>
            <AnalysisParameter name="pTNM">
              pT{gystology.T}N{gystology.N}M{gystology.metastasisNumber}
            </AnalysisParameter>
            <AnalysisParameter name="Наличие лимфоваскулярной инвазии">
              <BooleanStatus status={Boolean(gystology.tumorDifferentiation)} />
            </AnalysisParameter>
            <AnalysisParameter name="Cтепень патоморфологического ответа опухоли">
              {gystology.patomorphologicalAnswer}
            </AnalysisParameter>
          </ParametersGrid>
        </>
      )}
      <Title>ИГХ:</Title>
      <ParametersGrid temp="1fr 1fr">
        <AnalysisParameter name="Иммунногистотип" fontSize={20}>
          {analysisTranslates.immunohistotype[igh.Immunohistotype]}
        </AnalysisParameter>
        <AnalysisParameter name="Номер исследования">
          №{igh.researchNumber}
        </AnalysisParameter>
      </ParametersGrid>
      <ParametersGrid temp="1fr 1fr 1fr 1fr">
        <AnalysisParameter name="РЭ">{igh.ER}%</AnalysisParameter>
        <AnalysisParameter name="РП">{igh.PR}%</AnalysisParameter>
        <AnalysisParameter name="HER2-neu">{igh.HERneu}</AnalysisParameter>
        <AnalysisParameter name="HER2-neu factor">
          <BooleanStatus status={igh.HERneuFactor} />
        </AnalysisParameter>
      </ParametersGrid>
      <ParametersGrid temp="1fr 1fr">
        <AnalysisParameter name="ISH Цитогенетический анализ" fontSize={20}>
          {analysisTranslates.ish[igh.ISH]}
        </AnalysisParameter>
        <AnalysisParameter name="Ki67">{igh.Ki67}%</AnalysisParameter>
      </ParametersGrid>
    </Wrapper>
  );
};
