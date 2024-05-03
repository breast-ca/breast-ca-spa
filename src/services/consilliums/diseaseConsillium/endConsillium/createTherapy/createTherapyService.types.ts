import {
  CreateChemoTherapyDto,
  CreateCommonTherapyDto,
  CreateOperationDto,
  CreateRadiationTherapyDto,
  CreateSympomaticTherapyDto,
  TherapiesTranslateDto,
} from "@/api/shared";

export type Props = {
  handleSave: (payload: CreateCommonTherapyDto) => void;
  therapyTranslates: TherapiesTranslateDto;
};

export type PushTherapyPayload = {
  radiationTherapy?: CreateRadiationTherapyDto;
  operation?: CreateOperationDto;
  chemoTherapy?: CreateChemoTherapyDto;
  sympomaticTherapy?: CreateSympomaticTherapyDto;
};
