import { OperationResponseDto, TherapiesTranslateDto } from "@/api/shared";
import { PushEditTherapyPayload } from "../../editTherapyService.types";

export type Props = {
  operation: OperationResponseDto;
  therapiesTranslates: TherapiesTranslateDto;
  handlePushState: (values: PushEditTherapyPayload) => void;
};
