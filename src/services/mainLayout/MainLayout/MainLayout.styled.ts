import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

const contentWithPatientInfoCSS = css`
  display: grid;
  grid-template-columns: 1fr 400px;
  align-items: flex-start;
`;

export const ContentWrapper = styled.div<{ isPatientData?: boolean }>`
  width: 100%;
  ${({ isPatientData }) => isPatientData && contentWithPatientInfoCSS}
`;

export const Content = styled.div`
  margin-left: 100px;
  padding: 24px 48px;
`;

export const PatientInfoWrapper = styled.div`
  box-sizing: border-box;
  padding: 16px 16px 16px 24px;
  border-left: 1px solid #0000001f;
`;
