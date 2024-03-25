import styled from "styled-components";

export const Wrapper = styled.div``;

export const ListWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const PatientItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: var(--primary);
  }
`;

export const PatientName = styled.div`
  font-weight: 600;
`;
