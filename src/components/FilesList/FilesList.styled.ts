import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FileItem = styled.a`
  color: gray;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    color: #006effe1;
  }
`;

export const Extension = styled.span`
  color: black;
  font-size: 16px;
`;
