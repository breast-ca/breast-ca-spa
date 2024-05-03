import { FC, useMemo } from "react";
import {
  DiseaseCode,
  DiseaseDescription,
  InfosItemWrapper,
  InfosWrapper,
  SegmentedWrapper,
  TitleWrapper,
  Wrapper,
} from "./DiseaseProfilePage.styled";
import { DiseaseProfileSegment, Props } from "./DiseaseProfilePage.types";
import { WithLoader } from "@/components/WithLoader";
import { PageHeader } from "@/components/PageHeader";
import { ContextMenuButton } from "@/components/ContextMenuButton";
import { usePatientInfoPanel } from "@/services/mainLayout/mainLayoutService.hooks";
import { getDiseasInfos } from "@/services/patients/patientProfile/PatientsProfile/diseasesList/DiseasesList/DiseasesList.utils";
import { Empty, Tooltip } from "antd";
import { Segmented } from "@/components/Segmented";
import { Button } from "@/components/Button";
import { PlusCircleFill } from "react-bootstrap-icons";
import { useNavigate, useParams } from "react-router-dom";
import { DiseaseCommonInfo } from "./DiseaseCommonInfo";
import { DiseaseAnalysisListContainer } from "./diseaseAnalysisList";
import { DiseaseFullResponseDto, DiseaseTranslateDto } from "@/api/shared";
import { DiseaseConsilliumsListContainer } from "@/services/consilliums/diseaseConsilliumsList";
import { DiseaseTherapyListContainer } from "@/services/therapy/diseaseTherapyList";

export const DiseaseProfilePage: FC<Props> = ({
  isLoading,
  disease,
  diseaseEnums,
  handleEdit,
  handleCreateAnalysis,
  handleUpdateTNM,
}) => {
  const { segment } = useParams<{ segment?: DiseaseProfileSegment }>();

  usePatientInfoPanel(disease?.patient);

  const navigate = useNavigate();

  const segments = (
    <SegmentedWrapper>
      <Segmented
        value={segment}
        onChange={(value) =>
          navigate(`/disease/${disease?.id}/${value}`, {
            replace: true,
          })
        }
        options={[
          {
            label: "Паспорт",
            value: "common",
          },
          {
            label: "Лечения",
            value: "therapy",
          },
          {
            label: "Анализы",
            value: "analysis",
          },
          {
            label: "Консилиумы",
            value: "consiliums",
          },
        ]}
      />
      {segment === "analysis" && (
        <Button
          floating
          icon={<PlusCircleFill />}
          rounded
          onClick={handleCreateAnalysis}
        >
          Новый анализ
        </Button>
      )}
    </SegmentedWrapper>
  );

  return (
    <>
      <Wrapper>
        <WithLoader isLoading={isLoading}>
          {disease && (
            <>
              <PageHeader
                goBack
                title={
                  <DiseaseTitle disease={disease} diseaseEnums={diseaseEnums} />
                }
              >
                <ContextMenuButton
                  menuButtons={[
                    {
                      title: "Редактировать",
                      onClick: handleEdit,
                    },
                    {
                      title: disease.tnm ? "Изменить TNM" : "Добавить TNM",
                      onClick: handleUpdateTNM,
                    },
                  ]}
                />
              </PageHeader>
              <DiseaseInfos disease={disease} diseaseEnums={diseaseEnums} />
              {segments}
              {segment === "common" && (
                <DiseaseCommonInfo
                  disease={disease}
                  diseaseEnums={diseaseEnums}
                />
              )}
              {segment === "analysis" && (
                <DiseaseAnalysisListContainer diseaseId={disease.id} />
              )}
              {segment === "consiliums" && (
                <DiseaseConsilliumsListContainer diseaseId={disease.id} />
              )}
              {segment === "therapy" && (
                <DiseaseTherapyListContainer id={disease.id} />
              )}
            </>
          )}
          {!disease && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
        </WithLoader>
      </Wrapper>
    </>
  );
};

export const DiseaseTitle: FC<{
  disease: DiseaseFullResponseDto;
  diseaseEnums: DiseaseTranslateDto;
}> = ({ disease, diseaseEnums }) => {
  if (!disease) return null;

  return (
    <TitleWrapper>
      <DiseaseCode colour1={disease.colour1} colour2={disease.colour2}>
        {diseaseEnums.ICDCodes[disease.ICD]}
      </DiseaseCode>{" "}
      <Tooltip color="white" placement="bottom" title={disease.description}>
        <DiseaseDescription>{disease.description}</DiseaseDescription>
      </Tooltip>
    </TitleWrapper>
  );
};

export const DiseaseInfos: FC<{
  disease: DiseaseFullResponseDto;
  diseaseEnums: DiseaseTranslateDto;
}> = ({ disease, diseaseEnums }) => {
  const infos = useMemo(
    () => disease && getDiseasInfos(disease, diseaseEnums),
    [disease, diseaseEnums]
  );

  return (
    <InfosWrapper>
      {infos?.map((info) => (
        <InfosItemWrapper key={info}>{info}</InfosItemWrapper>
      ))}
    </InfosWrapper>
  );
};
