import { FC, useState } from "react";
import { Content, Wrapper } from "./PatientsProfile.styled";
import { Props } from "./PatientsProfile.types";
import { BackButton } from "@/components/BackButton";
import { WithLoader } from "@/components/WithLoader";
import { Empty } from "antd";
import { PageHeader } from "@/components/PageHeader";
import { Segmented } from "@/components/Segmented";
import { PatientCommonInfo } from "./PatientCommonInfo";

export const PatientsProfile: FC<Props> = ({ isLoading, patient }) => {
  const [segment, setSegment] = useState<"commonInfo" | "diseases">(
    "commonInfo"
  );

  return (
    <Wrapper>
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
            />
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
          </Content>
        )}
      </WithLoader>
    </Wrapper>
  );
};
