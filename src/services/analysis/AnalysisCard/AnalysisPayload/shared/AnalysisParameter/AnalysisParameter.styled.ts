import { Card } from "@/components/Card";
import styled from "styled-components";

export const Wrapper = styled(Card)`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid #efefef;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  min-height: 72px;
`;

export const Name = styled.div`
  font-size: 16px;
  color: #6f6f6f;
  font-weight: 500;
`;

export const Content = styled.div`
  margin-top: 4px;
  font-size: 24px;
  font-weight: 700;
  line-height: 22px;
  color: #2b2b2b;
`;
