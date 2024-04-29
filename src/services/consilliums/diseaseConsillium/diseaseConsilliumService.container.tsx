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
import { ConsilluimChatContainer } from "./consilluimChat";
import { EndConsilliumContainer, endConsilliumService } from "./endConsillium";

const {
  gates: { ConsilliumGate },
} = diseaseConsilliumService;

export const DiseaseConsilliumContainer: FC<{ id: number }> = ({ id }) => {
  const { consillium, analysisTranslates, handleDistribute, handleEnd } =
    useUnit({
      consillium: consilliumQuery.$data,
      analysisTranslates: AnalysisTranslatesQuery.$data,
      handleDistribute: distributeConsilliumService.inputs.handleOpen,
      handleEnd: endConsilliumService.inputs.openModal,
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

  const isConsilliumChat =
    consillium?.status === ConsilliumStatus.Working ||
    consillium?.status === ConsilliumStatus.Done;

  return (
    <>
      <ConsilliumGate id={id} />
      <EndConsilliumContainer id={id} />
      {distribution}
      {isConsilliumChat && (
        <ConsilluimChatContainer
          consillium={consillium}
          handleEnd={handleEnd}
        />
      )}
      {!consillium ||
        (!analysisTranslates && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />)}
    </>
  );
};
