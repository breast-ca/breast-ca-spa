import { FC } from "react";
import { Wrapper } from "./TherapiesList.styled";
import { Props } from "./TherapiesList.types";
import { WithLoader } from "@/components/WithLoader";
import { TherapyShortInfo } from "@/services/therapy/TherapyShortInfo";
import { Empty } from "antd";

export const TherapiesList: FC<Props> = ({
  therapies,
  isLoading,
  therapiesTranslates,
}) => {
  return (
    <Wrapper>
      <WithLoader isLoading={isLoading}>
        {!therapies.length && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
        {therapies.map((therapy) => (
          <TherapyShortInfo
            key={therapy.id}
            therapy={therapy}
            therapyTranslates={therapiesTranslates}
          />
        ))}
      </WithLoader>
    </Wrapper>
  );
};
