import { useUnit } from "effector-react";
import { diseaseProfileService } from ".";
import { DiseaseProfilePage } from "./DiseaseProfilePage";
import { diseaseQuery } from "./diseaseProfileService.api";
import { useParams } from "react-router-dom";
import { diseaseEnumsTranslationsQuery } from "../patients/patientProfile/PatientsProfile/diseasesList/diseasesListService.api";

const {
  gates: { DiseaseGate },
} = diseaseProfileService;

export const DiseaseProfileContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { disease, isLoading, diseaseEnums } = useUnit({
    disease: diseaseQuery.$data,
    isLoading: diseaseQuery.$pending,
    diseaseEnums: diseaseEnumsTranslationsQuery.$data,
  });

  if (!diseaseEnums) return;

  return (
    <>
      {id && <DiseaseGate id={Number(id)} />}
      <DiseaseProfilePage
        disease={disease}
        isLoading={isLoading}
        diseaseEnums={diseaseEnums}
      />
    </>
  );
};
