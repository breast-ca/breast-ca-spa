import { FC } from "react";
import { Wrapper } from "./ConsilliumStatus.styled";
import { Props } from "./ConsilliumStatus.types";
import { ConsilliumStatusTranslatesLookup } from "./ConsilliumStatus.constants";

export const ConsilliumStatus: FC<Props> = ({ status }) => {
  return (
    <Wrapper status={status}>
      {ConsilliumStatusTranslatesLookup[status]}
    </Wrapper>
  );
};
