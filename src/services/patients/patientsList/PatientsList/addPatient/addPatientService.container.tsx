import { useUnit } from "effector-react";
import { AddPatientModal } from "./AddPatientModal";
import { addPatientService } from ".";

export const AddPatientContainer = () => {
  const { isOpen, handleClose } = useUnit({
    isOpen: addPatientService.outputs.$isModalOpen,
    handleClose: addPatientService.inputs.handleCloseModal,
  });

  return <AddPatientModal isOpen={isOpen} handleClose={handleClose} />;
};
