import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const DiseaseDescription = styled.span`
  font-size: 18px;
  font-weight: 500;
  max-width: 600px;
  text-overflow: ellipsis;
  overflow-x: hidden;
  white-space: nowrap;
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

export const DiseaseCode = styled.span<{ colour1: string; colour2: string }>`
  padding: 0px 8px;
  font-size: 16px;
  border-radius: 20px;
  color: white;

  background: ${(props) =>
    `linear-gradient(45deg, ${props.colour1}, ${props.colour2})`};
`;
