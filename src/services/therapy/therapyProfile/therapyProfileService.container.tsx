import { useParams } from "react-router-dom";
import { therapyProfileService } from "./therapyProfileService.model";
import { useUnit } from "effector-react";
import {
  createAnalysisOnTherapyMutation,
  therapyQuery,
} from "./therapyProfileService.api";
import { TherapyProfile } from "./TherapyProfile";
import { therapyTranslatesQuery } from "../therapyTranslates/therapyTranslatesService.api";
import { diseaseEnumsTranslationsQuery } from "@/services/patients/patientProfile/PatientsProfile/diseasesList/diseasesListService.api";
import {
  EditTherapyContainer,
  editTherapyService,
} from "./TherapyProfile/editTherapy";
import { useCallback } from "react";
import { AnalysisType } from "@/api/shared";
import { AnalysisTranslatesQuery } from "@/services/analysis/analysisService.api";
import { analysisService } from "@/services/analysis/analysisService.model";

const {
  inputs,
  gates: { TherapyGate },
} = therapyProfileService;

const {
  gates: { AnalysisTranslatesGate },
} = analysisService;

export const TherapyProfileContainer = () => {
  const { id } = useParams<{ id: string }>();

  const {
    therapy,
    isLoading,
    therapyTranslates,
    diseaseTranslates,
    handleEdit,
    handleCancelTherapy,
    handleCreateConsillium,
    createAnalysis,
    analysisTranslates,
  } = useUnit({
    therapy: therapyQuery.$data,
    isLoading: therapyQuery.$pending,
    therapyTranslates: therapyTranslatesQuery.$data,
    diseaseTranslates: diseaseEnumsTranslationsQuery.$data,
    handleEdit: editTherapyService.inputs.openModal,
    handleCancelTherapy: inputs.handleCancelTherapy,
    handleCreateConsillium: inputs.handleCreateConsillium,
    createAnalysis: createAnalysisOnTherapyMutation.start,
    analysisTranslates: AnalysisTranslatesQuery.$data,
  });

  const handleCreateAnalysis = useCallback(
    (type: AnalysisType) => {
      if (!therapy) return;

      createAnalysis({
        diseaseId: therapy.disease.id,
        therapyId: therapy.id,
        analysisType: [type],
      });
    },
    [createAnalysis, therapy]
  );

  return (
    <>
      {id && <TherapyGate id={Number(id)} />}
      <AnalysisTranslatesGate />
      {therapy && <EditTherapyContainer therapy={therapy} />}
      {therapyTranslates && diseaseTranslates && analysisTranslates && (
        <TherapyProfile
          therapy={therapy}
          isLoading={isLoading}
          therapyTranslates={therapyTranslates}
          diseaseTranslates={diseaseTranslates}
          handleEdit={handleEdit}
          handleCancelTherapy={handleCancelTherapy}
          handleCreateConsillium={handleCreateConsillium}
          handleCreateAnalysis={handleCreateAnalysis}
          analysisTranslates={analysisTranslates}
        />
      )}
    </>
  );
};
