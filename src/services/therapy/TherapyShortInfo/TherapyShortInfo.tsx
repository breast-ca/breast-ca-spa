import { FC } from "react";
import { LightWrapper, Title, Wrapper } from "./TherapyShortInfo.styled";
import { Props } from "./TherapyShortInfo.types";
import { TherapyStatusBadge } from "@/components/shared/TherapyStatusBadge";
import { useNavigate } from "react-router-dom";

export const TherapyShortInfo: FC<Props> = ({
  therapy,
  therapyTranslates,
  card = true,
}) => {
  const navigate = useNavigate();

  const content = (
    <>
      <Title>{therapyTranslates.therapyType[therapy.therapyType]}</Title>
      <TherapyStatusBadge status={therapy.therapyStatus} />
    </>
  );

  if (!card)
    return (
      <LightWrapper onClick={() => navigate(`/therapy/${therapy.id}`)}>
        {content}
      </LightWrapper>
    );

  return (
    <Wrapper onClick={() => navigate(`/therapy/${therapy.id}`)}>
      {content}
    </Wrapper>
  );
};
