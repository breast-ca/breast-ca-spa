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
}>`
  transform: translateX(-12px);
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

export const ChatWrapper = styled.div<{ isEmpty: boolean }>`
  height: calc(100vh - 380px);
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
