import { Card } from "@/components/Card";
import styled from "styled-components";

export const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: calc(100vh - 360px);
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const AnalysisWrapper = styled(Card)`
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
