import { Status } from "@/api/shared";
import styled from "styled-components";

const StatusColors = {
  [Status.Treatment]: "#43D200",
  [Status.DispanseryRegistration]: "#C447FF",
  [Status.DispanseryObservation]: "#FF9447",
  [Status.Dead]: "#414141",
};

export const StatusWrapper = styled.div<{ status: Status }>`
  border: 2px solid ${({ status }) => StatusColors[status]}2a;
  color: ${({ status }) => StatusColors[status]};
  background: white;
  font-weight: 500;
  width: min-content;
  white-space: nowrap;
  padding: 0 12px;
  border-radius: 20px;
`;
