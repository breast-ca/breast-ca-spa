import { useParams } from "react-router-dom";
import { therapyProfileService } from "./therapyProfileService.model";
import { useUnit } from "effector-react";
import { therapyQuery } from "./therapyProfileService.api";
import { TherapyProfile } from "./TherapyProfile";
import { therapyTranslatesQuery } from "../therapyTranslates/therapyTranslatesService.api";
import { diseaseEnumsTranslationsQuery } from "@/services/patients/patientProfile/PatientsProfile/diseasesList/diseasesListService.api";
import {
  EditTherapyContainer,
  editTherapyService,
} from "./TherapyProfile/editTherapy";

const {
  inputs,
  gates: { TherapyGate },
} = therapyProfileService;

export const TherapyProfileContainer = () => {
  const { id } = useParams<{ id: string }>();

  const {
    therapy,
    isLoading,
    therapyTranslates,
    diseaseTranslates,
    handleEdit,
    handleCancelTherapy,
  } = useUnit({
    therapy: therapyQuery.$data,
    isLoading: therapyQuery.$pending,
    therapyTranslates: therapyTranslatesQuery.$data,
    diseaseTranslates: diseaseEnumsTranslationsQuery.$data,
    handleEdit: editTherapyService.inputs.openModal,
    handleCancelTherapy: inputs.handleCancelTherapy,
  });

  return (
    <>
      {id && <TherapyGate id={Number(id)} />}
      {therapy && <EditTherapyContainer therapy={therapy} />}
      {therapyTranslates && diseaseTranslates && (
        <TherapyProfile
          therapy={therapy}
          isLoading={isLoading}
          therapyTranslates={therapyTranslates}
          diseaseTranslates={diseaseTranslates}
          handleEdit={handleEdit}
          handleCancelTherapy={handleCancelTherapy}
        />
      )}
    </>
  );
};
