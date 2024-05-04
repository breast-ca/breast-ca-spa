import { OperationFillDto, RadiationTherapyFillDto } from "@/api/shared";

export type PushEditTherapyPayload = {
  operation?: OperationFillDto;
  radiation?: RadiationTherapyFillDto;
};
