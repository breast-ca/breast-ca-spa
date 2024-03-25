import { useUnit } from "effector-react";
import { AddPatientModal } from "./AddPatientModal";
import { addPatientService } from ".";
import { createPatientMutation } from "./addPatientService.api";

export const AddPatientContainer = () => {
  const { isOpen, handleClose, handleCreatePatinet } = useUnit({
    isOpen: addPatientService.outputs.$isModalOpen,
    handleClose: addPatientService.inputs.handleCloseModal,
    handleCreatePatinet: createPatientMutation.start,
  });

  return (
    <AddPatientModal
      isOpen={isOpen}
      handleClose={handleClose}
      handleCreatePatinet={handleCreatePatinet}
    />
  );
};
