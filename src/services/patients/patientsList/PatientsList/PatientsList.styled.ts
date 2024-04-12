import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const ListContent = styled.div`
  margin-top: 24px;
  max-width: 1080px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PatientItem = styled(Link)`
  display: grid;
  grid-template-columns: 2fr 1fr minmax(auto, 9%);
  gap: 16px;
  cursor: pointer;
  transition: 0.2s;
  align-items: center;
  color: #2f2f2f;

  &:hover {
    color: var(--primary);
  }
`;

export const PatientName = styled.div`
  font-weight: 600;
`;

export const PatientBirthDate = styled.div`
  text-align: right;
  font-family: monospace;
  font-size: 16px;
  font-weight: 600;
  color: #0000009a;
`;
