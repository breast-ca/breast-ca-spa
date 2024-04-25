import { useUnit } from "effector-react";
import { UpdateTNMModal } from "./UpdateTNMModal";
import { updateTNMService } from "./updateTNMService.model";
import { FC, useCallback } from "react";
import { Props } from "./updateTNMService.types";
import { updateTNMMutation } from "./updateTNMService.api";
import { UpdateTNMDTO } from "@/api/shared";

const { inputs, outputs } = updateTNMService;

export const UpdateTNMContainer: FC<Props> = ({ tnm, diseaseId }) => {
  const { isOpen, closeModal, handleSaveTNM } = useUnit({
    isOpen: outputs.$isModalOpen,
    closeModal: inputs.closeModal,
    handleSaveTNM: updateTNMMutation.start,
  });

  const handleSave = useCallback(
    (values: UpdateTNMDTO) => {
      handleSaveTNM({ ...values, id: diseaseId });
    },
    [diseaseId]
  );

  return (
    <>
      <UpdateTNMModal
        isOpen={isOpen}
        closeModal={closeModal}
        tnm={tnm}
        handleSave={handleSave}
      />
    </>
  );
};
