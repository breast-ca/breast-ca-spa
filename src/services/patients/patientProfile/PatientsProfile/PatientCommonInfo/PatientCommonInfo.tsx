import { FC } from "react";
import { Props } from "./PatientCommonInfo.types";
import { CommonInfo } from "@/components/CommonInfo";
import { Wrapper } from "./PatientCommonInfo.styled";
import dayjs from "dayjs";

export const PatientCommonInfo: FC<Props> = ({ patient }) => {
  return (
    <Wrapper>
      <CommonInfo
        items={[
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
