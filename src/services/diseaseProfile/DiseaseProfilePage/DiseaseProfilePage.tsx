import { FC, useMemo } from "react";
import {
  DiseaseDescription,
  DiseaseProfileGrid,
  Wrapper,
} from "./DiseaseProfilePage.styled";
import { Props } from "./DiseaseProfilePage.types";
import { GoBack } from "@/components/BackButton";
import { WithLoader } from "@/components/WithLoader";
import { PageHeader } from "@/components/PageHeader";
import { ContextMenuButton } from "@/components/ContextMenuButton";
import { PatientInfo } from "@/components/shared/PatientInfo";

export const DiseaseProfilePage: FC<Props> = ({
  isLoading,
  disease,
  diseaseEnums,
}) => {
  const diseaseTitle = useMemo(() => {
    if (!disease) return null;

    return (
      <>
        {diseaseEnums.ICDCodes[disease.ICD]}{" "}
        <DiseaseDescription>{disease?.description}</DiseaseDescription>
      </>
    );
  }, [disease, diseaseEnums.ICDCodes]);

  return [
    <GoBack />,
    <Wrapper>
      <WithLoader isLoading={isLoading}>
        {disease && (
          <DiseaseProfileGrid>
            <PageHeader title={diseaseTitle}>
              <ContextMenuButton />
            </PageHeader>
            <PatientInfo patient={disease.patient} />
          </DiseaseProfileGrid>
        )}
      </WithLoader>
    </Wrapper>,
  ];
};
