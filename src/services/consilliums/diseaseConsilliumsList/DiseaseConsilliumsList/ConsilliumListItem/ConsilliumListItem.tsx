import { FC } from "react";
import { Wrapper } from "./ConsilliumListItem.styled";
import { Props } from "./ConsilliumListItem.types";
import { ConsilliumStatus } from "@/components/shared/ConsilliumStatus";
import { AnalysisInfo } from "@/services/analysis/AnalysisCard/AnalysisCard";
import { Divider } from "antd";

export const ConsilliumListItem: FC<Props> = ({
  consillium,
  analysisTranslates,
}) => {
  return (
    <Wrapper>
      <ConsilliumStatus status={consillium.status} />
      <Divider
        style={{
          margin: 0,
          padding: 0,
          width: "calc(100% + 32px)",
          transform: "translateX(-16px)",
        }}
      />
      <AnalysisInfo
        analysis={consillium.analysis}
        analysisTranslates={analysisTranslates}
      />
    </Wrapper>
  );
};
