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
import { AddPatientContainer } from "./addPatient";
import { Empty, Skeleton } from "antd";
import dayjs from "dayjs";
import { PatinetStatus } from "@/components/shared/PatinetStatus";

export const PatientsList: FC<Props> = ({
  handleAddPatient,
  patientsList,
  isLoading,
}) => {
  return (
    <Wrapper>
      <AddPatientContainer />
      <PageHeader title="Пациенты">
        <Button icon={<PlusCircleFill />} onClick={handleAddPatient}>
          Создать пациента
        </Button>
      </PageHeader>
      {isLoading && <Skeleton active />}
      {!isLoading && !patientsList?.length && (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="Пока нет пациентов"
        />
      )}
      {Boolean(patientsList?.length) && (
        <ListWrapper>
          {patientsList?.map((item) => (
            <PatientItem key={item.id} to={`/patients/${item.id}`}>
              <PatientName>
                {item.surname} {item.name} {item.middleName}
              </PatientName>
              <PatinetStatus
                status={item.status}
                statusText={item.statusText}
              />
              <div>{dayjs(item.birthDate).format("DD.MM.YYYY")}</div>
            </PatientItem>
          ))}
        </ListWrapper>
      )}
    </Wrapper>
  );
};
