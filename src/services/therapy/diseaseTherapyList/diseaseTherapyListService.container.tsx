import { FC } from "react";
import { diseaseTherapyListService } from "./diseaseTherapyListService.model";
import { useUnit } from "effector-react";
import { diseaseTherapyListQuery } from "./diseaseTherapyListService.api";
import { TherapiesList } from "./TherapiesList";
import { therapyTranslatesQuery } from "../therapyTranslates/therapyTranslatesService.api";

const {
  gates: { TherapiesGate },
} = diseaseTherapyListService;

export const DiseaseTherapyListContainer: FC<{ id: number }> = ({ id }) => {
  const { thearpiesList, isLoading, therapiesTranslates } = useUnit({
    thearpiesList: diseaseTherapyListQuery.$data,
    isLoading: diseaseTherapyListQuery.$pending,
    therapiesTranslates: therapyTranslatesQuery.$data,
  });

  return (
    <>
      <TherapiesGate id={id} />
      {therapiesTranslates && (
        <TherapiesList
          therapies={thearpiesList || []}
          isLoading={isLoading}
          therapiesTranslates={therapiesTranslates}
        />
      )}
    </>
  );
};
