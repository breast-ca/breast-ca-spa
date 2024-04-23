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
import { AnalysisStatusBadge } from "@/components/shared/AnalysisStatus";
import dayjs from "dayjs";
import { AnalysisPayload } from "./AnalysisPayload";
import { AuthorBadge } from "@/components/shared/AuthorBadge";

export const AnalysisCard: FC<Props> = ({
  analysis,
  analysisTranslates,
  showTitle = true,
}) => {
  return (
    <Wrapper>
      <Header>
        <TitleContent>
          {showTitle && (
            <>
              <Title>
                {analysisTranslates.analysis[analysis.analysisType]}
              </Title>
              <AnalysisStatusBadge status={analysis.status} />
            </>
          )}
          {analysis.creator && <AuthorBadge user={analysis.creator} />}
        </TitleContent>
        <TitleContent>
          <CreatedDate>
            <CreatedDateTitle>
              {analysis.completedTime ? "анализ получен" : "создано"}:
            </CreatedDateTitle>
            {dayjs(analysis.completedTime || analysis.creationTime).format(
              "HH:mm DD.MM.YYYY"
            )}
          </CreatedDate>
        </TitleContent>
      </Header>
      {analysis.completedTime && (
        <AnalysisPayload
          analysis={analysis}
          analysisTranslates={analysisTranslates}
        />
      )}
    </Wrapper>
  );
};
