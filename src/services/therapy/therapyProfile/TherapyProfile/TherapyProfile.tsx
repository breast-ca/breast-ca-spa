import { FC, useState } from "react";
import { HeaderContext, Wrapper } from "./TherapyProfile.styled";
import { Props } from "./TherapyProfile.types";
import { WithLoader } from "@/components/WithLoader";
import { Empty } from "antd";
import { PageHeader } from "@/components/PageHeader";
import { TherapyStatusBadge } from "@/components/shared/TherapyStatusBadge";
import { TherapyInfoCard } from "./TherapyInfoCard";
import { usePatientInfoPanel } from "@/services/mainLayout/mainLayoutService.hooks";
import { ContextMenuButton } from "@/components/ContextMenuButton";
import { ContextMenuButtonColor } from "@/components/ContextMenuButton/ContextMenuButton.types";
import { Segmented } from "@/components/Segmented";
import {
  DiseaseInfos,
  DiseaseTitle,
} from "@/services/diseaseProfile/DiseaseProfilePage/DiseaseProfilePage";
import { DiseaseCommonInfo } from "@/services/diseaseProfile/DiseaseProfilePage/DiseaseCommonInfo";
import { TherapyStatus, TherapyType } from "@/api/shared";
import confirm from "antd/es/modal/confirm";
import { Button } from "@/components/Button";
import { useNavigate } from "react-router-dom";

export const TherapyProfile: FC<Props> = ({
  therapy,
  isLoading,
  therapyTranslates,
  diseaseTranslates,
  handleEdit,
  handleCancelTherapy,
  handleCreateConsillium,
}) => {
  const [segment, setSegment] = useState<"therapy" | "disease">("therapy");

  usePatientInfoPanel(therapy?.disease.patient);

  const navigate = useNavigate();

  if (!therapy || isLoading) {
    return (
      <WithLoader isLoading={isLoading}>
        {!therapy && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      </WithLoader>
    );
  }

  if (!therapy) return null;

  return (
    <Wrapper>
      <PageHeader
        goBack
        title={
          <>
            {therapyTranslates.therapyType[therapy.therapyType]}
            <TherapyStatusBadge status={therapy.therapyStatus} />
          </>
        }
      >
        <HeaderContext>
          {therapy.consillium?.id && (
            <Button
              onClick={() =>
                navigate(
                  `/disease/${therapy.disease.id}/consiliums/${therapy.consillium?.id}`
                )
              }
            >
              Перейти в консилиум
            </Button>
          )}
          <ContextMenuButton
            menuButtons={[
              {
                title: "Редактировать данные",
                onClick: handleEdit,
                hidden: therapy.therapyType === TherapyType.Symptomatic,
              },
              {
                title: "Начать консилиум",
                onClick: () =>
                  confirm({
                    title: "Начать консилиум?",
                    okText: "Начать",
                    type: "warning",
                    closable: true,
                    onOk: () => {
                      handleCreateConsillium();
                    },
                    maskClosable: true,
                  }),
                hidden: Boolean(therapy.consillium?.id),
              },
              {
                title: "Завершить",
                hidden: therapy.therapyStatus !== TherapyStatus.Started,
                onClick: () =>
                  confirm({
                    title: "Завершить лечение?",
                    okText: "Начать",
                    type: "warning",
                    closable: true,
                    onOk: () => {
                      handleCancelTherapy("end");
                    },
                    maskClosable: true,
                  }),
              },
              {
                title: "Отменить",
                color: ContextMenuButtonColor.danger,
                hidden: therapy.therapyStatus !== TherapyStatus.Started,
                onClick: () =>
                  confirm({
                    title: "Отменить лечение?",
                    okText: "Начать",
                    type: "warning",
                    closable: true,
                    onOk: () => {
                      handleCancelTherapy("cancel");
                    },
                    maskClosable: true,
                  }),
              },
            ]}
          />
        </HeaderContext>
      </PageHeader>
      <Segmented
        value={segment}
        onChange={(value) => setSegment(value as "therapy" | "disease")}
        options={[
          {
            label: "Терапия",
            value: "therapy",
          },
          {
            label: "Паспорт заболевания",
            value: "disease",
          },
        ]}
      />
      {segment === "therapy" && (
        <TherapyInfoCard
          therapy={therapy}
          therapyTranslates={therapyTranslates}
        />
      )}
      {segment === "disease" && (
        <>
          <DiseaseTitle
            diseaseEnums={diseaseTranslates}
            disease={therapy.disease}
          />
          <DiseaseInfos
            diseaseEnums={diseaseTranslates}
            disease={therapy.disease}
          />
          <DiseaseCommonInfo
            disease={therapy.disease}
            diseaseEnums={diseaseTranslates}
          />
        </>
      )}
    </Wrapper>
  );
};
