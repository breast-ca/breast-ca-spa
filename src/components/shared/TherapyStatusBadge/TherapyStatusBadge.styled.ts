import styled from "styled-components";
import { TherapyStatus } from "@/api/shared";
import { TherapyStatusColorsLookup } from "../TherapyStatusBadge/TherapyStatusBadge.constants";

export const Wrapper = styled.div<{ status: TherapyStatus }>`
  border: 2px solid ${({ status }) => TherapyStatusColorsLookup[status]}2a;
  color: ${({ status }) => TherapyStatusColorsLookup[status]};
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
