import {
  ChemotherapyFillDto,
  OperationFillDto,
  RadiationTherapyFillDto,
} from "@/api/shared";

export type PushEditTherapyPayload = {
  operation?: OperationFillDto;
  radiation?: RadiationTherapyFillDto;
  chemotherapy?: ChemotherapyFillDto;
};
