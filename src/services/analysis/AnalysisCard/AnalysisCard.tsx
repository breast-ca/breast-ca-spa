import { FC, useState } from "react";
import {
  CreatedDate,
  CreatedDateTitle,
  Header,
  ImagesWrapper,
  OpenChevron,
  Title,
  TitleContent,
  Wrapper,
} from "./AnalysisCard.styled";
import { Props } from "./AnalysisCard.types";
import { AnalysisStatusBadge } from "@/components/shared/AnalysisStatus";
import dayjs from "dayjs";
import { AnalysisPayload } from "./AnalysisPayload";
import { AuthorBadge } from "@/components/shared/AuthorBadge";
import { ChevronDown } from "react-bootstrap-icons";
import { Image } from "antd";
import { API_HOST } from "@/constants";

export const AnalysisCard: FC<Props> = ({
  analysis,
  analysisTranslates,
  showTitle = true,
}) => {
  const isPayloadExist = Boolean(analysis.completedTime);
  const [showPayload, setShowPayload] = useState(!showTitle || false);

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
          {isPayloadExist && showTitle && (
            <OpenChevron
              isOpen={showPayload}
              onClick={() => setShowPayload((show) => !show)}
            >
              <ChevronDown />
            </OpenChevron>
          )}
        </TitleContent>
      </Header>
      {isPayloadExist && showPayload && (
        <>
          <AnalysisPayload
            analysis={analysis}
            analysisTranslates={analysisTranslates}
          />
          <ImagesWrapper>
            <Image.PreviewGroup>
              {analysis.attachedImages.map((url) => (
                <Image
                  width={180}
                  height={180}
                  style={{
                    borderRadius: 8,
                    objectFit: "cover",
                    objectPosition: "50% 50%",
                  }}
                  src={`${API_HOST}/file-storage/file/${url}`}
                />
              ))}
            </Image.PreviewGroup>
          </ImagesWrapper>
        </>
      )}
    </Wrapper>
  );
};
