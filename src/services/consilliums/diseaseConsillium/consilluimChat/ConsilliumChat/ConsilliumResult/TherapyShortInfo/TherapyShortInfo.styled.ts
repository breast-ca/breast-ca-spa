import { Card } from "@/components/Card";
import styled from "styled-components";

export const Wrapper = styled(Card)`
  cursor: pointer;
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: 18px;
  white-space: nowrap;
  color: #00000098;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
