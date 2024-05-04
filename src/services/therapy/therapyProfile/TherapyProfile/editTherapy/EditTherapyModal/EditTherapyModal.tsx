import { FC, useCallback, useMemo } from "react";
import { Wrapper } from "./EditTherapyModal.styled";
import { Props } from "./EditTherapyModal.types";
import { Modal } from "@/components/Modal";
import { TherapyType } from "@/api/shared";
import { EditOperationForm } from "./EditOperationForm";
import { PushEditTherapyPayload } from "../editTherapyService.types";

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
    const forms = {
      [TherapyType.Operation]: therapy.Operation ? (
        <EditOperationForm
          operation={therapy.Operation}
          therapiesTranslates={therapiesTranslates}
          handlePushState={handlePushState}
        />
      ) : null,
      [TherapyType.RadiationTherapy]: <></>,
      [TherapyType.Chemotherapy]: <></>,
      [TherapyType.Symptomatic]: <></>,
    };

    return forms[therapy.therapyType];
  }, [
    handlePushState,
    therapiesTranslates,
    therapy.Operation,
    therapy.therapyType,
  ]);

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
