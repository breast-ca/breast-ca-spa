import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const DiseaseDescription = styled.span`
  font-size: 18px;
  font-weight: 400;
`;

export const InfosWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const InfosItemWrapper = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  background: white;
  border-radius: 12px;
  font-size: 16px;
  height: 32px;
  font-weight: 700;
  padding: 0px 16px;
`;

export const SegmentedWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
