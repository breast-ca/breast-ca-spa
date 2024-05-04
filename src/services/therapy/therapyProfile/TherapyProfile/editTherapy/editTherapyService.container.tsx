import { useUnit } from "effector-react";
import { editTherapyService } from "./editTherapyService.model";
import { EditTherapyModal } from "./EditTherapyModal";
import { FC } from "react";
import { TherapyFullResponseDto } from "@/api/shared";
import { therapyTranslatesQuery } from "@/services/therapy/therapyTranslates/therapyTranslatesService.api";

const { inputs, outputs } = editTherapyService;

export const EditTherapyContainer: FC<{
  therapy: TherapyFullResponseDto;
}> = ({ therapy }) => {
  const { isOpen, handleClose, therapiesTranslates } = useUnit({
    isOpen: outputs.$isOpen,
    handleClose: inputs.closeModal,
    therapiesTranslates: therapyTranslatesQuery.$data,
  });

  if (!therapiesTranslates) return;

  return (
    <>
      <EditTherapyModal
        isOpen={isOpen}
        handleClose={handleClose}
        therapy={therapy}
        therapiesTranslates={therapiesTranslates}
      />
    </>
  );
};
