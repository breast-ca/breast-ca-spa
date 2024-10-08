import { FC } from "react";
import { Wrapper } from "./RadiationView.styled";
import { Props } from "./RadiationView.types";
import { CommonInfo } from "@/components/CommonInfo";
import { EnumInfoBadge } from "../shared/EnumInfoBadge";

export const RadiationView: FC<Props> = ({ therapyTranslates, radiation }) => {
  return (
    <Wrapper>
      <CommonInfo
        card
        items={[
          {
            key: "Тип лучевой терапии",
            value:
              therapyTranslates.radiationTherapyType[
                radiation.radiationTherapyType
              ],
          },
          {
            key: "Кол-во курсов",
            value: radiation.coursesAmount,
          },
          {
            key: "РОД",
            value: `${radiation.radiationOnceAmount} Гр`,
          },
          {
            key: "CОД",
            value: `${radiation.radiationFullAmount} Гр`,
          },
          {
            key: "Тип осложнений",
            value:
              therapyTranslates.complicationType[radiation.complicationType],
          },
          {
            key: "Осложнения",
            column: true,
            value: Boolean(radiation.radiatonComplicationTypes) && (
              <EnumInfoBadge
                infos={radiation.radiatonComplicationTypes.map(
                  (elem) => therapyTranslates.radiationComplicationType[elem]
                )}
              />
            ),
          },
        ]}
      />
    </Wrapper>
  );
};
