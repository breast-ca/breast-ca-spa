import { ArrowLeftShort } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(Link)`
  height: 24px;
  width: min-content;
  display: flex;
  align-items: center;
  gap: 4px;

  padding: 0 12px 0 6px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
  font-size: 14px;
  font-weight: 600;
  color: black;
  white-space: nowrap;

  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ArrowLeft = styled(ArrowLeftShort)`
  font-size: 20px;
`;

export const BackCircleSC = styled(Link)`
  width: 42px;
  height: 42px;
  background: white;
  border-radius: 40px;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;

  svg {
    font-size: 26px;
    transition: 0.2s;
  }

  &:hover {
    svg {
      transform: scale(1.3);
    }
  }
`;
