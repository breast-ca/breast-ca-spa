import { FC } from "react";
import { Content, Wrapper } from "./PatientsProfile.styled";
import { Props } from "./PatientsProfile.types";
import { BackButton } from "@/components/BackButton";
import { WithLoader } from "@/components/WithLoader";
import { Empty } from "antd";
import { PageHeader } from "@/components/PageHeader";
import { Segmented } from "@/components/Segmented";

export const PatientsProfile: FC<Props> = ({ isLoading, patient }) => {
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
          </Content>
        )}
      </WithLoader>
    </Wrapper>
  );
};
