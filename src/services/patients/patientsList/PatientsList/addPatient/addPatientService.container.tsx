import { useUnit } from "effector-react";
import { AddPatientModal } from "./AddPatientModal";
import { addPatientService } from ".";
import { createPatientMutation } from "./addPatientService.api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AddPatientContainer = () => {
  const { isOpen, handleClose, handleCreatePatinet } = useUnit({
    isOpen: addPatientService.outputs.$isModalOpen,
    handleClose: addPatientService.inputs.handleCloseModal,
    handleCreatePatinet: createPatientMutation.start,
  });

  const navigate = useNavigate();

  useEffect(() => {
    return createPatientMutation.finished.success.watch(({ result }) =>
      navigate(`/patients/${result.id}`)
    ).unsubscribe;
  }, [navigate]);

  return (
    <AddPatientModal
      isOpen={isOpen}
      handleClose={handleClose}
      handleCreatePatinet={handleCreatePatinet}
    />
  );
};
