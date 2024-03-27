import { Button, Menu } from "antd";
import styled from "styled-components";
import { ContextMenuButtonColorsLookup } from "./ContextMenuButton.types";
import { ChevronDown } from "react-bootstrap-icons";

export const StyledMenuButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray !important;
  width: ${({ size }) => (size === "small" ? "32px" : "42px")};
  height: ${({ size }) => (size === "small" ? "32px" : "42px")} !important;
  border-radius: 8px;
  border: none;
  box-shadow: 0 4px 8px #00000010;
`;

export const MenuItem = styled(Menu.Item)<{ color?: string }>`
  color: ${({ color = ContextMenuButtonColorsLookup.primary }) =>
    color} !important;

  .ant-dropdown-menu-title-content {
    gap: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ant-dropdown-menu-item {
    &:hover {
      border-radius: 6px !important;
      background-color: var(--primary) !important;
    }
  }
`;

export const ChevronSC = styled(ChevronDown)<{ isOpen: boolean }>`
  transition: 0.2s;
  transform: rotate(${({ isOpen }) => (isOpen ? 180 : 0)}deg);
`;
