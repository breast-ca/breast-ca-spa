import { FC } from "react";
import { Wrapper } from "./AnalysisStatus.styled";
import { Props } from "./AnalysisStatus.types";
import { AnalysisStatusTranslatesLookup } from "./AnalysisStatus.cosntants";

export const AnalysisStatus: FC<Props> = ({ type }) => {
  return <Wrapper type={type}>{AnalysisStatusTranslatesLookup[type]}</Wrapper>;
};
