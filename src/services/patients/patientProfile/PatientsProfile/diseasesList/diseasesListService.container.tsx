import { useUnit } from "effector-react";
import { DiseasesList } from "./DiseasesList";
import {
  CreateDiseaseModalContainer,
  createDiseaseModalService,
} from "./createDiseaseModal";
import {
  diseaseEnumsTranslationsQuery,
  diseasesListQuery,
} from "./diseasesListService.api";
import { useParams } from "react-router-dom";
import { diseasesListService } from ".";

const {
  gates: { DiseasesGate },
} = diseasesListService;

export const DiseasesListContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { handleCreateDisease, diseaseEnums, isLoading, diseasesList } =
    useUnit({
      handleCreateDisease: createDiseaseModalService.inputs.openModal,
      diseaseEnums: diseaseEnumsTranslationsQuery.$data,
      diseasesList: diseasesListQuery.$data,
      isLoading: diseasesListQuery.$pending,
    });

  if (!diseaseEnums) return null;

  return (
    <>
      {id && <DiseasesGate patientId={Number(id)} />}
      <CreateDiseaseModalContainer diseaseEnums={diseaseEnums} />
      <DiseasesList
        handleCreateDisease={handleCreateDisease}
        isLoading={isLoading}
        diseasesList={diseasesList || []}
        diseaseEnums={diseaseEnums}
      />
    </>
  );
};
