import {
  RadiationTherapyResponseDto,
  TherapiesTranslateDto,
} from "@/api/shared";

export type Props = {
  therapyTranslates: TherapiesTranslateDto;
  radiation: RadiationTherapyResponseDto;
};
