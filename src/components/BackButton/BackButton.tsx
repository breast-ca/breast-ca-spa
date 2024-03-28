import { FC } from "react";
import { ArrowLeft, BackCircleSC, Wrapper } from "./BackButton.styled";
import { Props } from "./BackButton.types";

export const BackButton: FC<Props> = () => {
  return (
    <Wrapper to="..">
      <ArrowLeft />
      Назад
    </Wrapper>
  );
};

export const GoBack = BackButton;

export const BackCircle: FC<Props> = () => {
  return (
    <BackCircleSC to="..">
      <ArrowLeft />
    </BackCircleSC>
  );
};
