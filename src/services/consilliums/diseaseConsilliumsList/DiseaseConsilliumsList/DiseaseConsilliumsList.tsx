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
import { therapyTranslatesQuery } from "@/services/therapy/therapyTranslates/therapyTranslatesService.api";

export const DiseaseConsilliumsList: FC<Props> = ({
  isLoading,
  consilliumsList,
}) => {
  const { consilliumId } = useParams<{ consilliumId?: string }>();

  const { analysisTranslates, therapiesTranslates } = useUnit({
    analysisTranslates: AnalysisTranslatesQuery.$data,
    therapiesTranslates: therapyTranslatesQuery.$data,
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
          therapiesTranslates &&
          consilliumsList.map((elem) => (
            <ConsilliumListItem
              therapiesTranslates={therapiesTranslates}
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
