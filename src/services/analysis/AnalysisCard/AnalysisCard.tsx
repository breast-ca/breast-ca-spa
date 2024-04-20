import { FC } from "react";
import {
  CreatedDate,
  CreatedDateTitle,
  Header,
  Title,
  TitleContent,
  Wrapper,
} from "./AnalysisCard.styled";
import { Props } from "./AnalysisCard.types";
import { AnalysisStatus } from "@/components/shared/AnalysisStatus";
import dayjs from "dayjs";

export const AnalysisCard: FC<Props> = ({ analysis, analysisTranslates }) => {
  return (
    <Wrapper>
      <Header>
        <TitleContent>
          <Title>{analysisTranslates.analysis[analysis.analysisType]}</Title>
          <AnalysisStatus type={analysis.analysisStatus} />
        </TitleContent>
        <TitleContent>
          <CreatedDate>
            <CreatedDateTitle>создано:</CreatedDateTitle>
            {dayjs(analysis.creationTime).format("HH:mm DD.MM.YYYY")}
          </CreatedDate>
        </TitleContent>
      </Header>
    </Wrapper>
  );
};
