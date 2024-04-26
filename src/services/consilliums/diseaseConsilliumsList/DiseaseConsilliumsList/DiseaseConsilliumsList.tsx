import { FC } from "react";
import { Wrapper } from "./DiseaseConsilliumsList.styled";
import { Props } from "./DiseaseConsilliumsList.types";
import { WithLoader } from "@/components/WithLoader";
import { Empty } from "antd";
import { ConsilliumListItem } from "./ConsilliumListItem";
import { useUnit } from "effector-react";
import { AnalysisTranslatesQuery } from "@/services/analysis/analysisService.api";

export const DiseaseConsilliumsList: FC<Props> = ({
  isLoading,
  consilliumsList,
}) => {
  const { analysisTranslates } = useUnit({
    analysisTranslates: AnalysisTranslatesQuery.$data,
  });

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
            />
          ))}
      </WithLoader>
    </Wrapper>
  );
};
