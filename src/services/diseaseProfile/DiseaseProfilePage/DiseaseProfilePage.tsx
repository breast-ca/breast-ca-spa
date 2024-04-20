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
import { getDisesasInfos } from "@/services/patients/patientProfile/PatientsProfile/diseasesList/DiseasesList/DiseasesList.utils";
import { Empty, Tooltip } from "antd";
import { Segmented } from "@/components/Segmented";
import { Button } from "@/components/Button";
import { Pen, PlusCircleFill } from "react-bootstrap-icons";
import { useNavigate, useParams } from "react-router-dom";
import { DiseaseCommonInfo } from "./DiseaseCommonInfo";
import { DiseaseAnalysisListContainer } from "./diseaseAnalysisList";

export const DiseaseProfilePage: FC<Props> = ({
  isLoading,
  disease,
  diseaseEnums,
  handleEdit,
  handleCreateAnalysis,
}) => {
  const { segment } = useParams<{ segment?: DiseaseProfileSegment }>();

  const diseaseTitle = useMemo(() => {
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
  }, [disease, diseaseEnums.ICDCodes]);

  usePatientInfoPanel(disease?.patient);

  const infos = useMemo(
    () => disease && getDisesasInfos(disease, diseaseEnums),
    [disease, diseaseEnums]
  );

  const navigate = useNavigate();

  return (
    <Wrapper>
      <WithLoader isLoading={isLoading}>
        {disease && (
          <>
            <PageHeader goBack title={diseaseTitle}>
              <ContextMenuButton
                menuButtons={[
                  {
                    title: "Редактировать",
                    icon: <Pen />,
                    onClick: handleEdit,
                  },
                ]}
              />
            </PageHeader>
            <InfosWrapper>
              {infos?.map((info) => (
                <InfosItemWrapper key={info}>{info}</InfosItemWrapper>
              ))}
            </InfosWrapper>
            <SegmentedWrapper>
              <Segmented
                value={segment}
                onChange={(value) =>
                  navigate(`/disease/${disease.id}/${value}`, { replace: true })
                }
                options={[
                  {
                    label: "Паспорт",
                    value: "common",
                  },
                  {
                    label: "Маршрутная карта",
                    value: "therapy",
                  },
                  {
                    label: "Анализы",
                    value: "analysis",
                  },
                  {
                    label: "Консилиумы",
                    value: "consilium",
                  },
                ]}
              />
              <Button
                floating
                icon={<PlusCircleFill />}
                rounded
                onClick={handleCreateAnalysis}
              >
                Новый анализ
              </Button>
            </SegmentedWrapper>
            {segment === "common" && (
              <DiseaseCommonInfo
                disease={disease}
                diseaseEnums={diseaseEnums}
              />
            )}
            {segment === "analysis" && (
              <DiseaseAnalysisListContainer diseaseId={disease.id} />
            )}
          </>
        )}
        {!disease && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      </WithLoader>
    </Wrapper>
  );
};
