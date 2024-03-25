import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Grid = styled.div<{ temp: string }>`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: ${(props) => props.temp};
`;

export const Footer = styled.div`
  padding-top: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`;
