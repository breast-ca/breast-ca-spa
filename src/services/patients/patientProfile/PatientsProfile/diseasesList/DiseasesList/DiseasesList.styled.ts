import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
`;

export const DiseasesItem = styled.div`
  width: 380px;
  height: 210px;
  border-radius: 12px;
`;

export const CreateDiseasesItem = styled.div`
  width: 380px;
  height: 210px;
  border-radius: 12px;
  border: 2px dashed #b7b7b77d;
  border-radius: 16px;
  background: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #b7b7b7;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    border-color: var(--primary);
    color: var(--primary);
    background: var(--light);
  }
`;
