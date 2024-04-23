import { FC } from "react";
import { Name, Wrapper, Content } from "./AnalysisParameter.styled";
import { Props } from "./AnalysisParameter.types";

export const AnalysisParameter: FC<Props> = ({ name, children, fontSize }) => {
  return (
    <Wrapper>
      <Content style={{ fontSize }}>{children}</Content>
      <Name>{name}</Name>
    </Wrapper>
  );
};
