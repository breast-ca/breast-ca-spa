import { FC } from "react";
import { Title, TitleWrapper, Wrapper } from "./TherapyShortInfo.styled";
import { Props } from "./TherapyShortInfo.types";
import { TherapyStatusBadge } from "@/components/shared/TherapyStatusBadge";
import {
  CreatedDate,
  CreatedDateTitle,
} from "@/services/analysis/AnalysisCard/AnalysisCard.styled";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

export const TherapyShortInfo: FC<Props> = ({
  therapy,
  therapyTranslates,
  maxWidth,
}) => {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate(`/therapy/${therapy.id}`)}>
      <TitleWrapper>
        <Title style={{ maxWidth, whiteSpace: maxWidth ? "wrap" : "nowrap" }}>
          {therapyTranslates.therapyType[therapy.therapyType]}
        </Title>
        <TherapyStatusBadge status={therapy.therapyStatus} />
      </TitleWrapper>
      <CreatedDate>
        <CreatedDateTitle>
          {therapy.endingTime ? "дата завершения" : "дата начала"}:
        </CreatedDateTitle>
        {dayjs(therapy.endingTime || therapy.creationTime).format(
          "HH:mm DD.MM.YYYY"
        )}
      </CreatedDate>
    </Wrapper>
  );
};
