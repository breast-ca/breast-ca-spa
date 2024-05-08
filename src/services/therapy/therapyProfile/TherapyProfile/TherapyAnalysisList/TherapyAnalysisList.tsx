import { FC } from "react";
import { Wrapper } from "./TherapyAnalysisList.styled";
import { Props } from "./TherapyAnalysisList.types";
import { Empty } from "antd";
import { AnalysisShortInfo } from "@/services/analysis/AnalysisCard/AnalysisCard";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/Card";

export const TherapyAnalysisList: FC<Props> = ({
  analysis,
  analysisTranslates,
}) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      {!analysis.length && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      {analysis.map((elem) => (
        <Card
          style={{ cursor: "pointer" }}
          key={elem.id}
          onClick={() => navigate(`/analysis/fill/${elem.id}`)}
        >
          <AnalysisShortInfo
            analysis={elem}
            analysisTranslates={analysisTranslates}
          />
        </Card>
      ))}
    </Wrapper>
  );
};
