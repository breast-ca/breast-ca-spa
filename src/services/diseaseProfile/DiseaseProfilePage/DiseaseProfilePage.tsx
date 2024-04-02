import { FC, useMemo } from "react";
import {
  DiseaseDescription,
  InfosItemWrapper,
  InfosWrapper,
  SegmentedWrapper,
  Wrapper,
} from "./DiseaseProfilePage.styled";
import { DiseaseProfileSegment, Props } from "./DiseaseProfilePage.types";
import { WithLoader } from "@/components/WithLoader";
import { PageHeader } from "@/components/PageHeader";
import { ContextMenuButton } from "@/components/ContextMenuButton";
import { usePatientInfoPanel } from "@/services/mainLayout/mainLayoutService.hooks";
import { getDisesasInfos } from "@/services/patients/patientProfile/PatientsProfile/diseasesList/DiseasesList/DiseasesList.utils";
import { Empty } from "antd";
import { Segmented } from "@/components/Segmented";
import { Button } from "@/components/Button";
import { Pen, PlusCircleFill } from "react-bootstrap-icons";
import { useNavigate, useParams } from "react-router-dom";

export const DiseaseProfilePage: FC<Props> = ({
  isLoading,
  disease,
  diseaseEnums,
  handleEdit,
}) => {
  const { segment } = useParams<{ segment?: DiseaseProfileSegment }>();

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
                  navigate(`/disease/${disease.id}/${value}`)
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
                    value: "analisis",
                  },
                  {
                    label: "Консилиумы",
                    value: "consilium",
                  },
                ]}
              />
              <Button icon={<PlusCircleFill />}>Новый анализ</Button>
            </SegmentedWrapper>
          </>
        )}
        {!disease && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      </WithLoader>
    </Wrapper>
  );
};
