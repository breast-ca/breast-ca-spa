import {
  CreateChemoTherapyDto,
  CreateCommonTherapyDto,
  CreateOperationDto,
  CreateRadiationTherapyDto,
  CreateSympomaticTherapyDto,
} from "@/api/shared";

export type Props = {
  handleSave: (payload: CreateCommonTherapyDto) => void;
};

export type PushTherapyPayload = {
  radiationTherapy?: CreateRadiationTherapyDto;
  operation?: CreateOperationDto;
  chemoTherapy?: CreateChemoTherapyDto;
  sympomaticTherapy?: CreateSympomaticTherapyDto;
};
