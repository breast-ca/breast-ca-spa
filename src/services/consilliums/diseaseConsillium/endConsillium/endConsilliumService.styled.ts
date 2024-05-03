import { Trash3Fill } from "react-bootstrap-icons";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TherapyWrapper = styled.div`
  padding: 12px 16px;
  background-color: #f0f0f0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TrashSC = styled(Trash3Fill)`
  color: #bbbbbb;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    color: #ff4d4f;
  }
`;
