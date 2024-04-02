import { DiseaseResponseDto } from "@/api/shared";
import { Skeleton } from "antd";
import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`
  width: min-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
`;

const cardAnimate = keyframes`
  0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const DiseaseItem = styled.div<{ disease: DiseaseResponseDto }>`
  width: 380px;
  height: 210px;
  border-radius: 16px;

  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  box-sizing: border-box;

  background: ${({ disease }) =>
    `linear-gradient(45deg, ${disease.colour1}, ${disease.colour2})`};

  background-size: 100% 100%;
  transition:
    0.2s,
    background-size 0.2s ease;

  &:hover {
    background-size: 400% 400%;
    animation: ${cardAnimate} 5s ease infinite;
    transform: scale(1.05);
  }
`;

export const DiseaseTitle = styled.div`
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

export const DiseaseCode = styled.div`
  font-weight: 800;
  font-size: 32px;
`;

export const Description = styled.div`
  /* white-space: nowrap; */
  /* text-overflow: ellipsis; */
  /* overflow-x: hidden; */
  line-height: 18px;
  font-size: 16px;
  font-weight: 600;
  opacity: 0.8;
`;

export const CreateDiseasesItem = styled.div`
  width: 380px;
  height: 210px;
  border-radius: 12px;
  border: 2px dashed #b7b7b77d;
  border-radius: 16px;
  background: rgba(255, 255, 255, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #b7b7b7;
  transition: 0.2s;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    border-color: var(--primary);
    color: var(--primary);
    background: var(--light);
  }
`;

export const DiseaseSkeleton = styled(Skeleton.Input)`
  width: 380px !important;
  height: 210px !important;
  border-radius: 16px !important;
`;

export const InfoPanel = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const InfoPanelItem = styled.div`
  background: white;
  font-weight: 500;
  border-radius: 20px;
  font-size: 14px;
  height: 24px;
  display: flex;
  align-items: center;
  padding: 0 12px;
  color: #000000d3;
`;
