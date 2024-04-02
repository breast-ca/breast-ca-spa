import { FC } from "react";
import { Content, Wrapper } from "./PatientsProfile.styled";
import { PatientSegment, Props } from "./PatientsProfile.types";
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
  segment,
  handleChangeSegment,
}) => {
  return (
    <Wrapper>
      <AddPatientContainer edit />
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
              goBack="/patients"
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
              onChange={(value) => handleChangeSegment(value as PatientSegment)}
              block={false}
              options={[
                {
                  label: "Общая информация",
                  value: "common",
                },
                {
                  label: "Заболевания",
                  value: "disease",
                },
              ]}
            />
            {segment === "common" && <PatientCommonInfo patient={patient} />}
            {segment === "disease" && <DiseasesListContainer />}
          </Content>
        )}
      </WithLoader>
    </Wrapper>
  );
};
