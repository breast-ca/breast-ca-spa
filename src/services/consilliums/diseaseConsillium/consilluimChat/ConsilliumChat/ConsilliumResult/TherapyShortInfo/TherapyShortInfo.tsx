import { FC } from "react";
import { Title, TitleWrapper, Wrapper } from "./TherapyShortInfo.styled";
import { Props } from "./TherapyShortInfo.types";
import { TherapyStatusBadge } from "@/components/shared/TherapyStatusBadge";

export const TherapyShortInfo: FC<Props> = ({ therapy }) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{therapy.therapyType}</Title>
        <TherapyStatusBadge status={therapy.therapyStatus} />
      </TitleWrapper>
    </Wrapper>
  );
};
