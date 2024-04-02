import { FC, useCallback } from "react";
import { ArrowLeft, BackCircleSC, Wrapper } from "./BackButton.styled";
import { Props } from "./BackButton.types";
import { useNavigate } from "react-router-dom";

export const BackButton: FC<Props> = ({ path }) => {
  const navigate = useNavigate();

  const onClickHandler = useCallback(
    () => (path ? navigate(path) : navigate(-1)),
    [path, navigate]
  );

  return (
    <Wrapper onClick={onClickHandler}>
      <ArrowLeft />
      Назад
    </Wrapper>
  );
};

export const GoBack = BackButton;

export const BackCircle: FC<Props> = () => {
  const navigate = useNavigate();
  return (
    <BackCircleSC onClick={() => navigate(-1)}>
      <ArrowLeft />
    </BackCircleSC>
  );
};
