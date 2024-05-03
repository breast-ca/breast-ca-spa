import { Card } from "@/components/Card";
import styled from "styled-components";

export const Wrapper = styled(Card)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-weight: 800;
  font-size: 18px;
  color: #00000098;
  max-width: 200px;
  width: min-content;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
