import { FC } from "react";
import { Wrapper } from "./DiseaseProfilePage.styled";
import { Props } from "./DiseaseProfilePage.types";
import { GoBack } from "@/components/BackButton";

export const DiseaseProfilePage: FC<Props> = () => {
  return (
    <Wrapper>
      <GoBack />
    </Wrapper>
  );
};
