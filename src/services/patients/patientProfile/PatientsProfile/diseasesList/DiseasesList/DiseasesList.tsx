import { FC } from "react";
import { CreateDiseasesItem, Wrapper } from "./DiseasesList.styled";
import { Props } from "./DiseasesList.types";
import { ClipboardPlus } from "react-bootstrap-icons";

export const DiseasesList: FC<Props> = ({ handleCreateDisease }) => {
  return (
    <Wrapper>
      <CreateDiseasesItem onClick={handleCreateDisease}>
        <ClipboardPlus />
        Паспорт заболевания
      </CreateDiseasesItem>
    </Wrapper>
  );
};
