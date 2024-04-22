import { FC } from "react";
import { Wrapper } from "./UltrasoundView.styled";
import { Props } from "./UltrasoundView.types";

export const UltrasoundView: FC<Props> = ({ ultrasound }) => {
  return <Wrapper>{JSON.stringify(ultrasound, null, "\n")}</Wrapper>;
};
