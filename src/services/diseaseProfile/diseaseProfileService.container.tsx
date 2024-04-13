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
  CreateAnalysisContainer,
  createAnalysisService,
} from "../analysis/createAnalysis";
import { AnalysisService } from "../analysis";

const {
  gates: { DiseaseGate },
} = diseaseProfileService;

const {
  gates: { AnalysisTranslatesGate },
} = AnalysisService;

export const DiseaseProfileContainer = () => {
  const { id } = useParams<{ id: string }>();

  const {
    disease,
    isLoading,
    diseaseEnums,
    handleEdit,
    handleCreateAnalysis,
    AnalysisTranslates,
  } = useUnit({
    disease: diseaseQuery.$data,
    isLoading: diseaseQuery.$pending,
    diseaseEnums: diseaseEnumsTranslationsQuery.$data,
    handleEdit: editDiseaseModalService.inputs.handleEdit,
    handleCreateAnalysis: createAnalysisService.inputs.openModal,
    AnalysisTranslates: AnalysisService.outputs.$translates,
  });

  if (!diseaseEnums) return null;

  return (
    <>
      {id && <DiseaseGate id={Number(id)} />}
      <EditDiseaseModalContainer />
      {AnalysisTranslates && (
        <CreateAnalysisContainer AnalysisTranslates={AnalysisTranslates} />
      )}
      <AnalysisTranslatesGate />
      <DiseaseProfilePage
        disease={disease}
        isLoading={isLoading}
        diseaseEnums={diseaseEnums}
        handleEdit={() => disease && handleEdit(disease)}
        handleCreateAnalysis={handleCreateAnalysis}
      />
    </>
  );
};
