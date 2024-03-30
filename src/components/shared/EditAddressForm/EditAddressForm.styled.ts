import styled from "styled-components";

export const Wrapper = styled.div<{ temp?: string }>`
  display: grid;
  grid-template-columns: ${(props) => props.temp || "1fr 1fr"};
  gap: 12px;
`;
