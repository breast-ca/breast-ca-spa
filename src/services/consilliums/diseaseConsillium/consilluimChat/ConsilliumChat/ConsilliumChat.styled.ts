import { Card } from "@/components/Card";
import { Avatar } from "antd";
import styled, { css } from "styled-components";
import { getColorByString } from "./ConsilliumChat.utils";

export const Wrapper = styled.div`
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
`;

export const Header = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ManagementButton = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const AvatarsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderAvatarSC = styled(Avatar)<{
  isLead: boolean;
  colorHash: string;
  index?: number;
}>`
  margin-left: ${({ index }) => (index ? `-${12}px` : 0)};
  border: 2px solid ${({ isLead }) => (isLead ? "var(--primary)" : "white")};
  background-color: ${({ colorHash }) => getColorByString(colorHash)};

  &:first-child {
    transform: none;
  }
`;

const emptyChatCSS = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ChatWrapper = styled.div<{ isEmpty: boolean; isDone?: boolean }>`
  height: calc(100vh - ${({ isDone }) => (isDone ? 380 - 20 : 380)}px);
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: scroll;

  ${({ isEmpty }) => isEmpty && emptyChatCSS}
`;

export const SendMessageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ConsilliumContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;
