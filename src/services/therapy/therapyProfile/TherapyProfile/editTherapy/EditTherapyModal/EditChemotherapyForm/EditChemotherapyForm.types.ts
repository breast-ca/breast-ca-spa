import {
  ChemoTherapyResponseDto,
  TherapiesTranslateDto,
  TherapyFullResponseDto,
} from "@/api/shared";
import { PushEditTherapyPayload } from "../../editTherapyService.types";

export type Props = {
  chemotherapy: ChemoTherapyResponseDto;
  therapiesTranslates: TherapiesTranslateDto;
  handlePushState: (values: PushEditTherapyPayload) => void;
  therapy: TherapyFullResponseDto;
};
