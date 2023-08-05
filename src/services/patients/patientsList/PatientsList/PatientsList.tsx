import { FC } from "react";
import { Wrapper } from "./PatientsList.styled";
import { Props } from "./PatientsList.types";
import { PageHeader } from "@/components/PageHeader";

export const PatientsList: FC<Props> = () => {
  return (
    <Wrapper>
      <PageHeader title="Пациенты" />
    </Wrapper>
  );
};
