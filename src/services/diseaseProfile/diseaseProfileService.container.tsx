import { useUnit } from "effector-react";
import { diseaseProfileService } from ".";
import { DiseaseProfilePage } from "./DiseaseProfilePage";
import { diseaseQuery } from "./diseaseProfileService.api";
import { useParams } from "react-router-dom";
import { diseaseEnumsTranslationsQuery } from "../patients/patientProfile/PatientsProfile/diseasesList/diseasesListService.api";
import {
  EditDiseaseModalContainer,
  editDiseaseModalService,
} from "./editDiseaseModal";

const {
  gates: { DiseaseGate },
} = diseaseProfileService;

export const DiseaseProfileContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { disease, isLoading, diseaseEnums, handleEdit } = useUnit({
    disease: diseaseQuery.$data,
    isLoading: diseaseQuery.$pending,
    diseaseEnums: diseaseEnumsTranslationsQuery.$data,
    handleEdit: editDiseaseModalService.inputs.handleEdit,
  });

  if (!diseaseEnums) return;

  return (
    <>
      <EditDiseaseModalContainer />
      {id && <DiseaseGate id={Number(id)} />}
      <DiseaseProfilePage
        disease={disease}
        isLoading={isLoading}
        diseaseEnums={diseaseEnums}
        handleEdit={() => disease && handleEdit(disease)}
      />
    </>
  );
};
