import { ChevronRight } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px;
  cursor: pointer;
  transition: 0.2s;
  border-radius: 12px;
  position: relative;

  .drawer-menu-chevron {
    color: var(--primary);
  }

  &:hover {
    background-color: var(--gray);

    .drawer-menu-chevron {
      visibility: visible;
    }
  }

  &.active {
    background-color: var(--gray);
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
