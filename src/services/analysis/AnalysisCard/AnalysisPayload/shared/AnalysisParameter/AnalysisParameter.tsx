import { FC } from "react";
import { Name, Wrapper, Content } from "./AnalysisParameter.styled";
import { Props } from "./AnalysisParameter.types";

export const AnalysisParameter: FC<Props> = ({
  name,
  children,
  fontSize,
  additionalContent,
  onClick,
}) => {
  return (
    <Wrapper style={{ cursor: onClick ? "pointer" : void 0 }} onClick={onClick}>
      <Content style={{ fontSize }}>
        {children}
        {additionalContent}
      </Content>
      <Name>{name}</Name>
    </Wrapper>
  );
};
