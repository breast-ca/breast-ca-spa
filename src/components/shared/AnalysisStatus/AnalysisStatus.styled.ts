import { AnalysisStatus } from "@/api/shared";
import styled from "styled-components";
import { AnalysisStatusColorsLookup } from "./AnalysisStatus.cosntants";

export const Wrapper = styled.div<{ type: AnalysisStatus }>`
  background: ${({ type }) => AnalysisStatusColorsLookup[type]};
  padding: 2px 16px;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ type }) =>
    type === AnalysisStatus.Awaiting ? "#303030ff" : "white"};
`;
