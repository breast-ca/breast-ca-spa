import { FC } from "react";
import { diseaseConsilliumsListService } from "./diseaseConsilliumsListService.model";
import { useUnit } from "effector-react";
import { diseaseConsilliumsListQuery } from "./diseaseConsilliumsListService.api";
import { DiseaseConsilliumsList } from "./DiseaseConsilliumsList/DiseaseConsilliumsList";

const {
  gates: { DiseaseConsilliumsGate },
} = diseaseConsilliumsListService;

export const DiseaseConsilliumsListContainer: FC<{
  diseaseId: number;
}> = ({ diseaseId }) => {
  const { consilliumsList, isLoading } = useUnit({
    consilliumsList: diseaseConsilliumsListQuery.$data,
    isLoading: diseaseConsilliumsListQuery.$pending,
  });

  return (
    <>
      <DiseaseConsilliumsGate diseaseId={diseaseId} />
      <DiseaseConsilliumsList
        consilliumsList={consilliumsList || []}
        isLoading={isLoading}
      />
    </>
  );
};
