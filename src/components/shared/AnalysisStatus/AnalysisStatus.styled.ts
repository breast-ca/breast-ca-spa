import { AnalysisStatus } from "@/api/shared";
import styled from "styled-components";
import { AnalysisStatusColorsLookup } from "./AnalysisStatus.cosntants";

export const Wrapper = styled.div<{ status: AnalysisStatus }>`
  border: 2px solid ${({ status }) => AnalysisStatusColorsLookup[status]}2a;
  color: ${({ status }) => AnalysisStatusColorsLookup[status]};
  background: white;
  width: min-content;
  white-space: nowrap;
  padding: 0 12px;
  height: 28px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  border-radius: 20px;
`;

export const SimpleBadgeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AnalysisStatusCircle = styled.div<{ status: AnalysisStatus }>`
  width: 8px;
  height: 8px;
  border-radius: 10px;
  background-color: ${(props) => AnalysisStatusColorsLookup[props.status]}58;
  border: 2px solid ${(props) => AnalysisStatusColorsLookup[props.status]};
`;
