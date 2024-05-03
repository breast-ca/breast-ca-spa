import { TherapiesTranslateDto } from "@/api/shared";
import { PushTherapyPayload } from "../createTherapyService.types";

export type CreateProps = {
  handlePushState: (payload: PushTherapyPayload) => void;
  therapyTranslates: TherapiesTranslateDto;
};
