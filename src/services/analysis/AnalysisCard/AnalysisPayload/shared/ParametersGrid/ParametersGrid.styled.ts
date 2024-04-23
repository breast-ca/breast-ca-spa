import styled from "styled-components";

export const ParametersGrid = styled.div<{ temp: string }>`
  display: grid;
  grid-template-columns: ${({ temp }) => temp};
  gap: 16px;
`;
