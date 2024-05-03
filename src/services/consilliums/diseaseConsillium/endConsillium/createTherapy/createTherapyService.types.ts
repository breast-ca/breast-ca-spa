import { CreateChemoTherapyDto, CreateOperationDto, CreateRadiationTherapyDto } from "@/api/shared";

export type PushTherapyPayload = {
  radiationTherapy?: CreateRadiationTherapyDto;
  operation?: CreateOperationDto;
  chemoTherapy?: CreateChemoTherapyDto;
};
