import { useUnit } from "effector-react";
import { editTherapyService } from "./editTherapyService.model";
import { EditTherapyModal } from "./EditTherapyModal";
import { FC, useCallback } from "react";
import { TherapyFullResponseDto, TherapyType } from "@/api/shared";
import { therapyTranslatesQuery } from "@/services/therapy/therapyTranslates/therapyTranslatesService.api";
import { fillRadiationTherapyMutation } from "./editTherapyService.api";
import { PushEditTherapyPayload } from "./editTherapyService.types";

const { inputs, outputs } = editTherapyService;

export const EditTherapyContainer: FC<{
  therapy: TherapyFullResponseDto;
}> = ({ therapy }) => {
  const {
    isOpen,
    handleClose,
    therapiesTranslates,
    handleSaveTherapy,
    handleFillRadiation,
  } = useUnit({
    isOpen: outputs.$isOpen,
    handleClose: inputs.closeModal,
    therapiesTranslates: therapyTranslatesQuery.$data,
    handleSaveTherapy: inputs.handleSaveTherapy,
    handleFillRadiation: fillRadiationTherapyMutation.start,
  });

  const handleFillData = useCallback(
    (payload: PushEditTherapyPayload) => {
      switch (therapy.therapyType) {
        case TherapyType.RadiationTherapy:
          if (!payload.radiation) return;
          handleFillRadiation({
            therapyId: therapy.id,
            ...payload.radiation,
          });
      }
    },
    [handleFillRadiation, therapy.id, therapy.therapyType]
  );

  if (!therapiesTranslates) return;

  return (
    <>
      <EditTherapyModal
        isOpen={isOpen}
        handleClose={handleClose}
        therapy={therapy}
        therapiesTranslates={therapiesTranslates}
        handleSaveTherapy={handleSaveTherapy}
        handleFillData={handleFillData}
      />
    </>
  );
};
