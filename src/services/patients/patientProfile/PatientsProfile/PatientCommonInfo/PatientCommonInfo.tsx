import { FC } from "react";
import { Props } from "./PatientCommonInfo.types";
import { CommonInfo } from "@/components/CommonInfo";
import { Wrapper } from "./PatientCommonInfo.styled";
import dayjs from "dayjs";
import { PatinetStatus } from "@/components/shared/PatinetStatus";
import { getAddressString } from "@/utils/getAddressString";
import { compareAddresses } from "@/services/patients/patientsList/PatientsList/addPatient/AddPatientModal/AddPatientModal.utils";

export const PatientCommonInfo: FC<Props> = ({ patient }) => {
  const isAddressesSame =
    patient.factAddress &&
    patient.jureAddress &&
    compareAddresses(patient.factAddress, patient.jureAddress);

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
          {
            key: "Адрес регистрации",
            value: patient.factAddress && getAddressString(patient.factAddress),
          },
          {
            key: "Адрес проживания",
            value: isAddressesSame
              ? "Совпадает с регистрацией"
              : patient.jureAddress && getAddressString(patient.jureAddress),
          },
        ]}
      />
    </Wrapper>
  );
};
