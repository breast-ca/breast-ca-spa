import { Card } from "@/components/Card";
import styled from "styled-components";

export const Wrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: 0.2s;
  border: 1px solid transparent;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    ${({ onClick }) =>
      onClick && `border-color: var(--primary); cursor: pointer;`}
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ConsilliumInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
