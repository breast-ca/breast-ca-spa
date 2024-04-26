import { FC } from "react";
import { diseaseConsilliumService } from "./diseaseConsilliumService.model";
import { useUnit } from "effector-react";
import { consilliumQuery } from "./diseaseConsilliumService.api";
import { Empty } from "antd";
import { ConsilliumStatus } from "@/api/shared";
import { ConsilliumListItem } from "../diseaseConsilliumsList/DiseaseConsilliumsList/ConsilliumListItem";
import { AnalysisTranslatesQuery } from "@/services/analysis/analysisService.api";
import {
  DistributeConsilliumContainer,
  distributeConsilliumService,
} from "./distributeConsillium";

const {
  gates: { ConsilliumGate },
} = diseaseConsilliumService;

export const DiseaseConsilliumContainer: FC<{ id: number }> = ({ id }) => {
  const { consillium, analysisTranslates, handleDistribute } = useUnit({
    consillium: consilliumQuery.$data,
    analysisTranslates: AnalysisTranslatesQuery.$data,
    handleDistribute: distributeConsilliumService.inputs.handleOpen,
  });

  const distribution = consillium?.status ===
    ConsilliumStatus.AwaitingDistribution &&
    analysisTranslates && (
      <>
        <DistributeConsilliumContainer id={id} />
        <ConsilliumListItem
          handleDistribute={handleDistribute}
          consillium={consillium}
          analysisTranslates={analysisTranslates}
        />
      </>
    );

  return (
    <>
      <ConsilliumGate id={id} />
      {distribution}
      {!consillium ||
        (!analysisTranslates && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />)}
    </>
  );
};
