import { FC, useCallback } from "react";
import { Wrapper } from "./DiseaseConsilliumsList.styled";
import { Props } from "./DiseaseConsilliumsList.types";
import { WithLoader } from "@/components/WithLoader";
import { Empty } from "antd";
import { ConsilliumListItem } from "./ConsilliumListItem";
import { useUnit } from "effector-react";
import { AnalysisTranslatesQuery } from "@/services/analysis/analysisService.api";
import { useNavigate, useParams } from "react-router-dom";
import { DiseaseConsilliumContainer } from "../../diseaseConsillium/diseaseConsilliumService.container";

export const DiseaseConsilliumsList: FC<Props> = ({
  isLoading,
  consilliumsList,
}) => {
  const { consilliumId } = useParams<{ consilliumId?: string }>();

  const { analysisTranslates } = useUnit({
    analysisTranslates: AnalysisTranslatesQuery.$data,
  });

  const navigate = useNavigate();

  const handleClick = useCallback(
    (id: number) => {
      navigate(`${id}`);
    },
    [navigate]
  );

  if (consilliumId)
    return <DiseaseConsilliumContainer id={Number(consilliumId)} />;

  return (
    <Wrapper>
      <WithLoader isLoading={isLoading}>
        {!consilliumsList.length && (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
        {analysisTranslates &&
          consilliumsList.map((elem) => (
            <ConsilliumListItem
              key={elem.id}
              consillium={elem}
              analysisTranslates={analysisTranslates}
              handleClick={handleClick}
            />
          ))}
      </WithLoader>
    </Wrapper>
  );
};
