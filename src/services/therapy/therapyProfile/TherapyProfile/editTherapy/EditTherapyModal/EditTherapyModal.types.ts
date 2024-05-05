import { TherapiesTranslateDto, TherapyFullResponseDto } from "@/api/shared";
import { PushEditTherapyPayload } from "../editTherapyService.types";

export type Props = {
  isOpen: boolean;
  handleClose: () => void;
  handleSaveTherapy: () => void;
  therapy: TherapyFullResponseDto;
  therapiesTranslates: TherapiesTranslateDto;
  handleFillData: (payload: PushEditTherapyPayload) => void;
};
