import { Status } from "@/api/shared";
import { StatusColors } from "@/components/shared/PatinetStatus/PatinetStatus.styled";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Grid = styled.div<{ temp: string }>`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: ${(props) => props.temp};
`;

export const Footer = styled.div`
  padding-top: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
`;

export const PatinetStatusWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PatinetStatusCircle = styled.div<{ status: Status }>`
  width: 8px;
  height: 8px;
  border-radius: 10px;
  background-color: ${(props) => StatusColors[props.status]}58;
  border: 2px solid ${(props) => StatusColors[props.status]};
`;

export const FactAddressTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
