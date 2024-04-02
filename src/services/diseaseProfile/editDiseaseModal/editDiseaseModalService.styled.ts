import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Grid = styled.div<{ temp: string }>`
  display: grid;
  grid-template-columns: ${(props) => props.temp};
  gap: 16px;
`;
