import { FC, useMemo } from "react";
import { Wrapper } from "./EditTherapyModal.styled";
import { Props } from "./EditTherapyModal.types";
import { Modal } from "@/components/Modal";
import { TherapyType } from "@/api/shared";
import { EditOperationForm } from "./EditOperationForm";

export const EditTherapyModal: FC<Props> = ({
  isOpen,
  handleClose,
  therapy,
  therapiesTranslates,
}) => {
  const editTherapyForm = useMemo(() => {
    const forms = {
      [TherapyType.Operation]: therapy.Operation ? (
        <EditOperationForm
          operation={therapy.Operation}
          therapiesTranslates={therapiesTranslates}
        />
      ) : null,
      [TherapyType.RadiationTherapy]: <></>,
      [TherapyType.Chemotherapy]: <></>,
      [TherapyType.Symptomatic]: <></>,
    };

    return forms[therapy.therapyType];
  }, [therapy.therapyType]);

  return (
    <Modal
      width={640}
      title="Редактировать данные"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <Wrapper>{editTherapyForm}</Wrapper>
    </Modal>
  );
};
