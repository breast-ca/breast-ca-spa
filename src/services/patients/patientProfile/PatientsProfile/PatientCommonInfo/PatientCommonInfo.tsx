import { FC } from "react";
import { Props } from "./PatientCommonInfo.types";
import { CommonInfo } from "@/components/CommonInfo";
import { Wrapper } from "./PatientCommonInfo.styled";
import dayjs from "dayjs";
import { PatinetStatus } from "@/components/shared/PatinetStatus";
import { getAddressString } from "@/utils/getAddressString";
import { compareAddresses } from "@/services/patients/patientsList/PatientsList/addPatient/AddPatientModal/AddPatientModal.utils";
import { StatusTranslates } from "@/constants/enums";

export const PatientCommonInfo: FC<Props> = ({ patient, card = true }) => {
  const isAddressesSame =
    patient.factAddress &&
    patient.jureAddress &&
    compareAddresses(patient.factAddress, patient.jureAddress);

  return (
    <Wrapper>
      <CommonInfo
        card={card}
        items={[
          {
            key: "Статус",
            value: (
              <PatinetStatus
                status={patient.status}
                statusText={StatusTranslates[patient.status]}
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
            column: true,
            value: `${patient.medicalInsurance} (${patient.insuranceOrganization})`,
          },
          {
            key: "Адрес регистрации",
            column: true,
            value: patient.jureAddress && getAddressString(patient.jureAddress),
          },
          {
            key: "Адрес проживания",
            column: true,
            value: isAddressesSame
              ? "Совпадает с регистрацией"
              : patient.factAddress && getAddressString(patient.factAddress),
          },
        ]}
      />
    </Wrapper>
  );
};
