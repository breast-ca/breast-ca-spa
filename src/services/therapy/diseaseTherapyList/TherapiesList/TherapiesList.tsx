import { FC } from "react";
import { Wrapper } from "./TherapiesList.styled";
import { Props } from "./TherapiesList.types";
import { WithLoader } from "@/components/WithLoader";
import { TherapyShortInfo } from "@/services/consilliums/diseaseConsillium/consilluimChat/ConsilliumChat/ConsilliumResult/TherapyShortInfo";

export const TherapiesList: FC<Props> = ({
  therapies,
  isLoading,
  therapiesTranslates,
}) => {
  return (
    <Wrapper>
      <WithLoader isLoading={isLoading}>
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
