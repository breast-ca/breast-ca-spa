import { TherapiesTranslateDto, TherapyFullResponseDto } from "@/api/shared";

export type Props = {
  isOpen: boolean;
  handleClose: () => void;
  therapy: TherapyFullResponseDto;
  therapiesTranslates: TherapiesTranslateDto;
};
