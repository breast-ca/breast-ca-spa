import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 16px;
  min-width: 1080px;
`;

export const LogoWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  margin-top: 24px;
  width: 1200px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 24px;
`;

export const Menu = styled.div`
  height: min-content;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background-color: white;
  box-shadow: 0 8px 16px #0000000e;
  border-radius: 24px;
`;

export const OutletContent = styled.div`
  height: min-content;
  padding: 16px;
  background-color: white;
  box-shadow: 0 8px 16px #0000000e;
  border-radius: 24px;
`;

export const LogoContent = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
