import styled from "styled-components";

export const Wrapper = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const LoginPanel = styled.div`
  width: 400px;
  background: white;
  box-shadow: 0 14px 28px 0 rgba(49, 0, 12, 0.1);
  padding: 18px 32px 32px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`;
