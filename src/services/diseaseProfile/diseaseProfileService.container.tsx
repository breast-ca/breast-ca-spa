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
import {
  CreateAnalisisContainer,
  createAnalisisService,
} from "./createAnalisis";

const {
  gates: { DiseaseGate },
} = diseaseProfileService;

export const DiseaseProfileContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { disease, isLoading, diseaseEnums, handleEdit, handleCreateAnalisis } =
    useUnit({
      disease: diseaseQuery.$data,
      isLoading: diseaseQuery.$pending,
      diseaseEnums: diseaseEnumsTranslationsQuery.$data,
      handleEdit: editDiseaseModalService.inputs.handleEdit,
      handleCreateAnalisis: createAnalisisService.inputs.openModal,
    });

  if (!diseaseEnums) return;

  return (
    <>
      {id && <DiseaseGate id={Number(id)} />}
      <EditDiseaseModalContainer />
      <CreateAnalisisContainer />
      <DiseaseProfilePage
        disease={disease}
        isLoading={isLoading}
        diseaseEnums={diseaseEnums}
        handleEdit={() => disease && handleEdit(disease)}
        handleCreateAnalisis={handleCreateAnalisis}
      />
    </>
  );
};
