import { FC } from "react";
import { MinusSC, PlusSC } from "./BooleanStatus.styled";
import { Props } from "./BooleanStatus.types";

export const BooleanStatus: FC<Props> = ({ status }) => {
  return status ? <PlusSC /> : <MinusSC />;
};
