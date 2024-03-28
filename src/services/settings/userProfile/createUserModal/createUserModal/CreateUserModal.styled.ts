import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Grid = styled.div<{ temp: string }>`
  display: grid;
  gap: 16px;
  grid-template-columns: ${(props) => props.temp};
`;

export const Footer = styled.div`
  width: calc(100%);
  padding: 0 24px;
  transform: translateX(-24px);
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid #0000000e;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
`;
