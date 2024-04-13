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
} from "../analisis/createAnalisis";
import { analisisService } from "../analisis";

const {
  gates: { DiseaseGate },
} = diseaseProfileService;

const {
  gates: { AnalisisTranslatesGate },
} = analisisService;

export const DiseaseProfileContainer = () => {
  const { id } = useParams<{ id: string }>();

  const {
    disease,
    isLoading,
    diseaseEnums,
    handleEdit,
    handleCreateAnalisis,
    analisisTranslates,
  } = useUnit({
    disease: diseaseQuery.$data,
    isLoading: diseaseQuery.$pending,
    diseaseEnums: diseaseEnumsTranslationsQuery.$data,
    handleEdit: editDiseaseModalService.inputs.handleEdit,
    handleCreateAnalisis: createAnalisisService.inputs.openModal,
    analisisTranslates: analisisService.outputs.$translates,
  });

  if (!diseaseEnums) return null;

  return (
    <>
      {id && <DiseaseGate id={Number(id)} />}
      <EditDiseaseModalContainer />
      {analisisTranslates && (
        <CreateAnalisisContainer analisisTranslates={analisisTranslates} />
      )}
      <AnalisisTranslatesGate />
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
