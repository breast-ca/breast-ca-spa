import { FC } from "react";
import { diseaseConsilliumService } from "./diseaseConsilliumService.model";
import { useUnit } from "effector-react";
import { consilliumQuery } from "./diseaseConsilliumService.api";
import { Empty } from "antd";
import { ConsilliumStatus } from "@/api/shared";
import { ConsilliumListItem } from "../diseaseConsilliumsList/DiseaseConsilliumsList/ConsilliumListItem";
import { AnalysisTranslatesQuery } from "@/services/analysis/analysisService.api";

const {
  gates: { ConsilliumGate },
} = diseaseConsilliumService;

export const DiseaseConsilliumContainer: FC<{ id: number }> = ({ id }) => {
  const { consillium, analysisTranslates } = useUnit({
    consillium: consilliumQuery.$data,
    analysisTranslates: AnalysisTranslatesQuery.$data,
  });

  if (!consillium || !analysisTranslates) {
    return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;
  }

  if (consillium.status === ConsilliumStatus.AwaitingDistribution)
    return (
      <>
        <ConsilliumListItem
          handleDistribute={() => void 0}
          consillium={consillium}
          analysisTranslates={analysisTranslates}
        />
      </>
    );

  return (
    <>
      <ConsilliumGate id={id} />
    </>
  );
};
