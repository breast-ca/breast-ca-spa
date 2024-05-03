import { FC } from "react";
import { Wrapper } from "./TherapyStatusBadge.styled";
import { Props } from "./TherapyStatusBadge.types";
import { TherapyStatusTranslatesLookup } from "./TherapyStatusBadge.constants";

export const TherapyStatusBadge: FC<Props> = ({ status }) => {
  return (
    <Wrapper status={status}>{TherapyStatusTranslatesLookup[status]}</Wrapper>
  );
};
