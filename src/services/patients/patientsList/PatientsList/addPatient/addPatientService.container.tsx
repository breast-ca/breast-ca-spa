import { useUnit } from "effector-react";
import { AddPatientModal } from "./AddPatientModal";
import { addPatientService } from ".";
import {
  createPatientMutation,
  editPatientMutation,
} from "./addPatientService.api";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AddPatientContainer: FC<{ edit?: boolean }> = ({ edit }) => {
  const { isOpen, handleClose, handleCreatePatinet, payload, editPatient } =
    useUnit({
      isOpen: addPatientService.outputs.$isModalOpen,
      handleClose: addPatientService.inputs.handleCloseModal,
      handleCreatePatinet: createPatientMutation.start,
      payload: addPatientService.outputs.$payload,
      editPatient: editPatientMutation.start,
    });

  const navigate = useNavigate();

  useEffect(() => {
    return createPatientMutation.finished.success.watch(({ result }) =>
      navigate(`/patients/${result.id}`)
    ).unsubscribe;
  }, [navigate]);

  return (
    <AddPatientModal
      edit={edit}
      isOpen={isOpen}
      handleClose={handleClose}
      handleCreatePatinet={handleCreatePatinet}
      payload={payload}
      editPatient={editPatient}
    />
  );
};
