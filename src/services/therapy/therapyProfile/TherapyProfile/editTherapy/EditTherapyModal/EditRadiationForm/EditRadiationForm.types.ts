import {
  RadiationTherapyResponseDto,
  TherapiesTranslateDto,
  TherapyFullResponseDto,
} from "@/api/shared";
import { PushEditTherapyPayload } from "../../editTherapyService.types";

export type Props = {
  radiation: RadiationTherapyResponseDto;
  therapiesTranslates: TherapiesTranslateDto;
  handlePushState: (values: PushEditTherapyPayload) => void;
  therapy: TherapyFullResponseDto;
};
