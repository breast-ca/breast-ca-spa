import { FC } from "react";
import { Wrapper } from "./PatientsList.styled";
import { Props } from "./PatientsList.types";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { PlusCircleFill } from "react-bootstrap-icons";
import { AddPatientContainer } from "./addPatient";

export const PatientsList: FC<Props> = ({ handleAddPatient }) => {
  return (
    <Wrapper>
      <AddPatientContainer />
      <PageHeader title="Пациенты">
        <Button icon={<PlusCircleFill />} onClick={handleAddPatient}>
          Создать пациента
        </Button>
      </PageHeader>
    </Wrapper>
  );
};
