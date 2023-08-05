import { ChevronRight } from "react-bootstrap-icons";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 12px;
  position: relative;

  &:hover {
    background-color: var(--gray);

    .drawer-menu-chevron {
      visibility: visible;
    }
  }
`;

export const MenuItemIcon = styled.div<{ color: string }>`
  width: 32px;
  height: 32px;
  background: ${({ color }) => color};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const MenuItemText = styled.div`
  color: var(--text);
  font-weight: 400;
  font-size: 16px;
`;

export const ChevronSC = styled(ChevronRight)`
  position: absolute;
  top: 18px;
  bottom: 0;
  right: 12px;
  visibility: hidden;
`;
