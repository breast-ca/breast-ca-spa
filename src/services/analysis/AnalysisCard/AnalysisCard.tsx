import { FC, useState } from "react";
import {
  CreatedDate,
  CreatedDateTitle,
  Header,
  ImagesWrapper,
  ManagementButtonsWrapper,
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
import { Divider, Image } from "antd";
import { API_HOST } from "@/constants";
import { FilesList } from "@/components/FilesList";
import { Button } from "@/components/Button";
import {
  AnalysisConsilliumResponseDto,
  AnalysisStatus,
  AnalysisTranslatesDto,
} from "@/api/shared";

export const AnalysisCard: FC<Props> = ({
  analysis,
  analysisTranslates,
  showTitle = true,
  handleCreateConsillium,
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
          {(Boolean(analysis.attachedImages.length) ||
            Boolean(analysis.attachedDocuments.length)) && (
            <>
              <Divider
                style={{
                  margin: 0,
                  padding: 0,
                  width: "calc(100% + 32px)",
                  transform: "translateX(-16px)",
                }}
              >
                Документы
              </Divider>
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
              {analysis.attachedDocuments && (
                <FilesList files={analysis.attachedDocuments} />
              )}
            </>
          )}
          {handleCreateConsillium &&
            analysis.status === AnalysisStatus.Ready && (
              <>
                <Divider
                  style={{
                    margin: 0,
                    padding: 0,
                    width: "calc(100% + 32px)",
                    transform: "translateX(-16px)",
                  }}
                />
                <ManagementButtonsWrapper>
                  <Button onClick={handleCreateConsillium}>
                    Начать консиллиум
                  </Button>
                </ManagementButtonsWrapper>
              </>
            )}
        </>
      )}
    </Wrapper>
  );
};

export const AnalysisInfo: FC<{
  analysis: AnalysisConsilliumResponseDto;
  analysisTranslates: AnalysisTranslatesDto;
}> = ({ analysis, analysisTranslates }) => {
  return (
    <Header>
      <TitleContent>
        <Title>{analysisTranslates.analysis[analysis.analysisType]}</Title>
        {analysis.creator && <AuthorBadge user={analysis.creator} />}
      </TitleContent>
      <TitleContent>
        <CreatedDate>
          <CreatedDateTitle>
            {analysis.completedTime ? "анализ получен" : "создано"}:
          </CreatedDateTitle>
          {dayjs(analysis.completedTime).format("HH:mm DD.MM.YYYY")}
        </CreatedDate>
      </TitleContent>
    </Header>
  );
};
