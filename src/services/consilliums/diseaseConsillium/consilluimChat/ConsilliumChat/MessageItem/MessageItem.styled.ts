import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ isMy: boolean }>`
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  align-items: flex-end;

  justify-content: ${({ isMy }) => (isMy ? "flex-end" : "flex-start")};
`;

const myMessageStyle = css`
  background-color: #ffcfcf;
`;

export const Message = styled.div<{ isMy: boolean }>`
  background-color: #ffedca;
  width: fit-content;
  padding: 8px 16px;
  border-radius: 12px;
  max-width: 380px;
  text-align: left;
  font-weight: 500;

  ${({ isMy }) => isMy && myMessageStyle}
`;

export const CreatorInfo = styled.div`
  font-size: 12px;
  color: gray;
`;
