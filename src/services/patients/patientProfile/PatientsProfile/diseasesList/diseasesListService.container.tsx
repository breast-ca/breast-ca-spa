import { useUnit } from "effector-react";
import { DiseasesList } from "./DiseasesList";
import {
  CreateDiseaseModalContainer,
  createDiseaseModalService,
} from "./createDiseaseModal";
import { diseaseEnumsTranslationsQuery } from "./diseasesListService.api";

export const DiseasesListContainer = () => {
  const { handleCreateDisease, diseaseEnums } = useUnit({
    handleCreateDisease: createDiseaseModalService.inputs.openModal,
    diseaseEnums: diseaseEnumsTranslationsQuery.$data,
  });

  return (
    <>
      {diseaseEnums && (
        <CreateDiseaseModalContainer diseaseEnums={diseaseEnums} />
      )}
      <DiseasesList handleCreateDisease={handleCreateDisease} />
    </>
  );
};
