import { FC, useMemo } from "react";
import { DiseaseDescription, Wrapper } from "./DiseaseProfilePage.styled";
import { Props } from "./DiseaseProfilePage.types";
import { WithLoader } from "@/components/WithLoader";
import { PageHeader } from "@/components/PageHeader";
import { ContextMenuButton } from "@/components/ContextMenuButton";
import { usePatientInfoPanel } from "@/services/mainLayout/mainLayoutService.hooks";

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

  usePatientInfoPanel(disease?.patient);

  return (
    <Wrapper>
      <WithLoader isLoading={isLoading}>
        {disease && (
          <PageHeader goBack title={diseaseTitle}>
            <ContextMenuButton />
          </PageHeader>
        )}
      </WithLoader>
    </Wrapper>
  );
};
