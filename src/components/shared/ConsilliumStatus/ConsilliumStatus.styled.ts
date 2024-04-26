import styled from "styled-components";
import { ConsilliumStatusColorsLookup } from "./ConsilliumStatus.constants";
import { ConsilliumStatus } from "@/api/shared";

export const Wrapper = styled.div<{ status: ConsilliumStatus }>`
  border: 2px solid ${({ status }) => ConsilliumStatusColorsLookup[status]}2a;
  color: ${({ status }) => ConsilliumStatusColorsLookup[status]};
  background: white;
  width: min-content;
  white-space: nowrap;
  padding: 0 12px;
  height: 28px;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  border-radius: 20px;
`;
