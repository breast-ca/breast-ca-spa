import { Pen } from "react-bootstrap-icons";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  opacity: 0.9;
`;

export const PenSC = styled(Pen)`
  font-size: 16px;
  margin-left: 12px;
  cursor: pointer;
  transform: translateY(2px);
  opacity: 0.6;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }
`;
