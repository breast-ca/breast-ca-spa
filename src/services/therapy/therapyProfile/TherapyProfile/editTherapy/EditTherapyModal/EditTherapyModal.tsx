import { FC, useCallback, useMemo } from "react";
import { Wrapper } from "./EditTherapyModal.styled";
import { Props } from "./EditTherapyModal.types";
import { Modal } from "@/components/Modal";
import { TherapyType } from "@/api/shared";
import { EditOperationForm } from "./EditOperationForm";
import { PushEditTherapyPayload } from "../editTherapyService.types";
import { EditRadiationForm } from "./EditRadiationForm";
import { EditChemotherapyForm } from "./EditChemotherapyForm";

export const EditTherapyModal: FC<Props> = ({
  isOpen,
  handleClose,
  therapy,
  therapiesTranslates,
  handleSaveTherapy,
}) => {
  const handlePushState = useCallback((values: PushEditTherapyPayload) => {
    console.log(values);
  }, []);

  const editTherapyForm = useMemo(() => {
    if (!isOpen) return null;

    const forms = {
      [TherapyType.Operation]: therapy.Operation ? (
        <EditOperationForm
          operation={therapy.Operation}
          therapiesTranslates={therapiesTranslates}
          handlePushState={handlePushState}
        />
      ) : null,
      [TherapyType.RadiationTherapy]: therapy.RadiationTherapy ? (
        <EditRadiationForm
          radiation={therapy.RadiationTherapy}
          therapiesTranslates={therapiesTranslates}
          handlePushState={handlePushState}
          therapy={therapy}
        />
      ) : null,
      [TherapyType.Chemotherapy]: therapy.Chemotherapy ? (
        <EditChemotherapyForm
          chemotherapy={therapy.Chemotherapy}
          therapiesTranslates={therapiesTranslates}
          handlePushState={handlePushState}
          therapy={therapy}
        />
      ) : null,
      [TherapyType.Symptomatic]: <></>,
    };

    return forms[therapy.therapyType];
  }, [handlePushState, therapiesTranslates, therapy, isOpen]);

  return (
    <Modal
      width={640}
      title="Редактировать данные"
      isOpen={isOpen}
      handleClose={handleClose}
      handleSubmit={handleSaveTherapy}
    >
      <Wrapper>{editTherapyForm}</Wrapper>
    </Modal>
  );
};
