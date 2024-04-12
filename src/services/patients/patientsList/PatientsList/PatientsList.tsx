import { FC } from "react";
import {
  ListContent,
  PatientBirthDate,
  PatientName,
  Wrapper,
} from "./PatientsList.styled";
import { Props } from "./PatientsList.types";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { PlusCircleFill } from "react-bootstrap-icons";
import { AddPatientContainer } from "../../addPatient";
import { Pagination } from "antd";
import dayjs from "dayjs";
import { PatinetStatus } from "@/components/shared/PatinetStatus";
import { StatusTranslates } from "@/constants/enums";
import { SearchForm } from "./SearchForm";
import { Table } from "@/components/Table";

export const PatientsList: FC<Props> = ({
  handleAddPatient,
  patientsList,
  isLoading,
  pageNumber,
  pageSize,
  setPageNumber,
}) => {
  const patients = patientsList?.items || [];

  return (
    <Wrapper>
      <AddPatientContainer />
      <PageHeader title="Пациенты">
        <Button icon={<PlusCircleFill />} onClick={() => handleAddPatient()}>
          Создать пациента
        </Button>
      </PageHeader>
      <ListContent>
        <SearchForm />
        {Boolean(patients.length) && (
          <Table
            columns={[
              {
                label: "ФИО",
                render: (item) => (
                  <PatientName>
                    {item.surname} {item.name} {item.middleName}
                  </PatientName>
                ),
                size: "2fr",
              },
              {
                label: "Статус",
                render: (item) => (
                  <PatinetStatus
                    status={item.status}
                    statusText={StatusTranslates[item.status]}
                  />
                ),
                size: "1fr",
              },
              {
                label: "Дата рождения",
                render: (item) => (
                  <PatientBirthDate>
                    {dayjs(item.birthDate).format("DD.MM.YYYY")}
                  </PatientBirthDate>
                ),
                size: "1fr",
              },
            ]}
            elements={patients}
          />
        )}
        <Pagination
          disabled={isLoading}
          total={patientsList?.total}
          pageSize={pageSize}
          current={pageNumber}
          onChange={(page) => setPageNumber(page)}
        />
      </ListContent>
    </Wrapper>
  );
};
