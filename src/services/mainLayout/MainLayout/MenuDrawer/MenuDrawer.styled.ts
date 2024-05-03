import { Avatar } from "antd";
import styled from "styled-components";

export const UserInfo = styled.div`
  font-family: Montserrat;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const UserDescription = styled.div`
  font-size: 14px;
  margin-top: 4px;
  color: #aaaaaa;
  font-weight: 600;
  white-space: nowrap;
  max-width: 200px;
  text-overflow: ellipsis;
  overflow-x: hidden;
`;

export const AvatarSC = styled(Avatar)`
  min-width: ${({ size }) => `${size}px`};
  min-height: ${({ size }) => `${size}px`};
`;

export const DrawerContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
