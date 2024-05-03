import { FC } from "react";
import { Wrapper } from "./ChemotherapyView.styled";
import { Props } from "./ChemotherapyView.types";
import { CommonInfo } from "@/components/CommonInfo";

export const ChemotherapyView: FC<Props> = ({
  chemoTherapy,
  therapyTranslates,
}) => {
  return (
    <Wrapper>
      <CommonInfo
        card
        items={[
          {
            key: "Тип лекарственной терапии",
            value: therapyTranslates.chemoType[chemoTherapy.chemoType],
          },
          {
            key: "Линия",
            value: chemoTherapy.line,
          },
        ]}
      />
    </Wrapper>
  );
};
