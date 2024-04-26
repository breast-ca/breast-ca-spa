import { Pen } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 368px;
  right: 16px;
  top: 16px;
  position: fixed;
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

export const LinkSC = styled(Link)`
  color: black;
  transition: 0.2s;

  &:hover {
    color: var(--primary);
  }
`;
