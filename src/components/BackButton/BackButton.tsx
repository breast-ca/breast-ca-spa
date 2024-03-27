import { FC } from "react";
import { ArrowLeft, Wrapper } from "./BackButton.styled";
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
