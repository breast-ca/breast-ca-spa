import { FC } from "react";
import { Title, Wrapper } from "./PageHeader.styled";
import { Props } from "./PageHeader.types";
import { GoBack } from "../BackButton";

export const PageHeader: FC<Props> = ({ title, children, goBack }) => {
  return (
    <Wrapper>
      <Title>
        {goBack && (
          <GoBack path={typeof goBack === "string" ? goBack : void 0} />
        )}
        {title}
      </Title>
      <div>{children}</div>
    </Wrapper>
  );
};
