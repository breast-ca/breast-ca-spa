import { FC } from "react";
import { Props } from "./PatientCommonInfo.types";
import { CommonInfo } from "@/components/CommonInfo";
import { Wrapper } from "./PatientCommonInfo.styled";
import dayjs from "dayjs";
import { PatinetStatus } from "@/components/shared/PatinetStatus";

export const PatientCommonInfo: FC<Props> = ({ patient }) => {
  return (
    <Wrapper>
      <CommonInfo
        items={[
          {
            key: "Статус",
            value: (
              <PatinetStatus
                status={patient.status}
                statusText={patient.statusText}
              />
            ),
          },
          {
            key: "Дата рождения",
            value: dayjs(patient.birthDate).format("DD.MM.YYYY"),
          },
          {
            key: "Номер телефона",
            value: patient.phoneNumber,
          },
          {
            key: "Паспорт",
            value: patient.passport,
          },

          {
            key: "СНИЛС",
            value: patient.individualInsurance,
          },
          {
            key: "Страховой полис",
            value: `${patient.medicalInsurance} (${patient.insuranceOrganization})`,
          },
        ]}
      />
    </Wrapper>
  );
};
