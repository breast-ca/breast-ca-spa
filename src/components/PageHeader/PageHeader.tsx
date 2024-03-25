import { FC } from "react";
import { Title, Wrapper } from "./PageHeader.styled";
import { Props } from "./PageHeader.types";

export const PageHeader: FC<Props> = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <div>{children}</div>
    </Wrapper>
  );
};
