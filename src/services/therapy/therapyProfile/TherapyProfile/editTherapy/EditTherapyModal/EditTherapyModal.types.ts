import { TherapiesTranslateDto, TherapyFullResponseDto } from "@/api/shared";

export type Props = {
  isOpen: boolean;
  handleClose: () => void;
  handleSaveTherapy: () => void;
  therapy: TherapyFullResponseDto;
  therapiesTranslates: TherapiesTranslateDto;
};
