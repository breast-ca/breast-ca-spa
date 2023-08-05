import { Avatar } from "antd";
import { Grid } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

const activeMenuItemCSS = css`
  border-radius: 100px;
  color: white;
  background-color: var(--primary);
`;

export const MenuPanel = styled.div`
  width: 100px;
  height: 100vh;
  max-height: 100vh;
  padding: 24px 0;
  gap: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  background-color: var(--light);

  .active {
    ${activeMenuItemCSS}
  }
`;

export const MenuItem = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary);
  color: var(--text);
  border-radius: 16px;
  width: 62px;
  height: 62px;
  transition: 0.2s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 3px;

  &:hover {
    border-radius: 100px;
  }
`;

export const MenuItemText = styled.div`
  font-size: 10px;
  font-weight: 600;
`;

export const ContentWrapper = styled.div`
  margin-left: 100px;
  padding: 24px;
`;

export const GridSC = styled(Grid)`
  cursor: pointer;
`;

export const UserInfo = styled.div`
  font-family: Montserrat;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const UserDescription = styled.div`
  font-size: 14px;
  margin-top: 4px;
  color: lightgray;
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
