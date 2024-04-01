import { useUnit } from "effector-react";
import { DiseasesList } from "./DiseasesList";
import { CreateDiseaseModalContainer, createDiseaseModalService } from "./createDiseaseModal";

export const DiseasesListContainer = () => {

  const { handleCreateDisease } = useUnit({
    handleCreateDisease: createDiseaseModalService.inputs.openModal,
  });

  return (
    <>
      <CreateDiseaseModalContainer />
      <DiseasesList handleCreateDisease={handleCreateDisease} />
    </>
  );
};
