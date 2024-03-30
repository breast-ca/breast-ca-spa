import { FC, useState } from "react";
import { Content, Wrapper } from "./PatientsProfile.styled";
import { Props } from "./PatientsProfile.types";
import { BackButton } from "@/components/BackButton";
import { WithLoader } from "@/components/WithLoader";
import { Empty } from "antd";
import { PageHeader } from "@/components/PageHeader";
import { Segmented } from "@/components/Segmented";
import { PatientCommonInfo } from "./PatientCommonInfo";
import { ContextMenuButton } from "@/components/ContextMenuButton";
import { Pen } from "react-bootstrap-icons";
import { AddPatientContainer } from "../../patientsList/PatientsList/addPatient";
import { DiseasesListContainer } from "./diseasesList";

export const PatientsProfile: FC<Props> = ({
  isLoading,
  patient,
  handleEdit,
}) => {
  const [segment, setSegment] = useState<"commonInfo" | "diseases">(
    "commonInfo"
  );

  return (
    <Wrapper>
      <AddPatientContainer edit />
      <BackButton />
      <WithLoader isLoading={isLoading}>
        {!patient && (
          <Empty
            description="Нет данных"
            image={Empty.PRESENTED_IMAGE_SIMPLE}
          />
        )}
        {patient && (
          <Content>
            <PageHeader
              title={`${patient.surname} ${patient.name} ${
                patient.middleName || ""
              }`}
            >
              <ContextMenuButton
                menuButtons={[
                  {
                    title: "Редактировать",
                    icon: <Pen />,
                    onClick: () => patient && handleEdit(patient),
                  },
                ]}
              />
            </PageHeader>
            <Segmented
              value={segment}
              onChange={(value) =>
                setSegment(value as "commonInfo" | "diseases")
              }
              block={false}
              options={[
                {
                  label: "Общая информация",
                  value: "commonInfo",
                },
                {
                  label: "Заболевания",
                  value: "diseases",
                },
              ]}
            />
            {segment === "commonInfo" && (
              <PatientCommonInfo patient={patient} />
            )}
            {segment === "diseases" && <DiseasesListContainer />}
          </Content>
        )}
      </WithLoader>
    </Wrapper>
  );
};
