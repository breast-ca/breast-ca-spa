import { FC } from "react";
import {
  AnalysisStatusCircle,
  SimpleBadgeWrapper,
  Wrapper,
} from "./AnalysisStatus.styled";
import { Props } from "./AnalysisStatus.types";
import { AnalysisStatusTranslatesLookup } from "./AnalysisStatus.cosntants";

export const AnalysisStatusSimpleBadge: FC<Props> = ({ status }) => {
  return (
    <SimpleBadgeWrapper>
      <AnalysisStatusCircle status={status} />
      {AnalysisStatusTranslatesLookup[status]}
    </SimpleBadgeWrapper>
  );
};

export const AnalysisStatusBadge: FC<Props> = ({ status }) => {
  return (
    <Wrapper status={status}>{AnalysisStatusTranslatesLookup[status]}</Wrapper>
  );
};
