import { Card } from "@/components/Card";
import styled from "styled-components";

export const Wrapper = styled(Card)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LightWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 18px;
  white-space: nowrap;
  color: #000000bb;
`;
