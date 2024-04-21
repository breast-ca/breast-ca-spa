import { Card } from "@/components/Card";
import styled from "styled-components";

export const Wrapper = styled(Card)`
  width: 100%;
  max-width: 800px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: flex-end;
`;
