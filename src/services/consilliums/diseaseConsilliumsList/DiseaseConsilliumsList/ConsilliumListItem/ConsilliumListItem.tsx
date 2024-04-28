import { FC } from "react";
import { ConsilliumInfo, Header, Wrapper } from "./ConsilliumListItem.styled";
import { Props } from "./ConsilliumListItem.types";
import { ConsilliumStatus } from "@/components/shared/ConsilliumStatus";
import { AnalysisInfo } from "@/services/analysis/AnalysisCard/AnalysisCard";
import { Divider } from "antd";
import { Button } from "@/components/Button";
import { UsersOnConsillium } from "@/services/consilliums/diseaseConsillium/consilluimChat/ConsilliumChat/ConsilliumChat";

export const ConsilliumListItem: FC<Props> = ({
  consillium,
  analysisTranslates,
  handleClick,
  handleDistribute,
}) => {
  return (
    <Wrapper
      onClick={handleDistribute ? void 0 : () => handleClick?.(consillium.id)}
    >
      <Header>
        <ConsilliumInfo>
          <ConsilliumStatus status={consillium.status} />
          <UsersOnConsillium usersOnConsillium={consillium.usersOnConsillium} />
        </ConsilliumInfo>
        {handleDistribute && (
          <Button onClick={handleDistribute}>Назначить участников</Button>
        )}
      </Header>
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
