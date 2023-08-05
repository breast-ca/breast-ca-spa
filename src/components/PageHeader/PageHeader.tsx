import { FC } from "react";
import { Title, Wrapper } from "./PageHeader.styled";
import { Props } from "./PageHeader.types";

export const PageHeader: FC<Props> = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};
