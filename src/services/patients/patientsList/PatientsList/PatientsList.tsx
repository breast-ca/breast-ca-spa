import { FC } from "react";
import {
  ListWrapper,
  PatientItem,
  PatientName,
  Wrapper,
} from "./PatientsList.styled";
import { Props } from "./PatientsList.types";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { PlusCircleFill } from "react-bootstrap-icons";
import { AddPatientContainer } from "../../addPatient";
import { Empty, Pagination, Skeleton } from "antd";
import dayjs from "dayjs";
import { PatinetStatus } from "@/components/shared/PatinetStatus";
import { StatusTranslates } from "@/constants/enums";

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
      {isLoading && <Skeleton active />}
      {!isLoading && !patients.length && (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Пока нет пациентов"
        />
      )}
      {Boolean(patients.length) && (
        <ListWrapper>
          {patients.map((item) => (
            <PatientItem key={item.id} to={`/patients/${item.id}/common`}>
              <PatientName>
                {item.surname} {item.name} {item.middleName}
              </PatientName>
              <PatinetStatus
                status={item.status}
                statusText={StatusTranslates[item.status]}
              />
              <div>{dayjs(item.birthDate).format("DD.MM.YYYY")}</div>
            </PatientItem>
          ))}
          <Pagination
            total={patientsList?.total}
            pageSize={pageSize}
            current={pageNumber}
            onChange={(page) => setPageNumber(page)}
          />
        </ListWrapper>
      )}
    </Wrapper>
  );
};
