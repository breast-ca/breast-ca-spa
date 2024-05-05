import { FC } from "react";
import { Wrapper } from "./ChemotherapyView.styled";
import { Props } from "./ChemotherapyView.types";
import { CommonInfo } from "@/components/CommonInfo";
import { EnumInfoBadge } from "../shared/EnumInfoBadge";

export const ChemotherapyView: FC<Props> = ({
  chemoTherapy,
  therapyTranslates,
}) => {
  return (
    <Wrapper>
      <CommonInfo
        card
        items={[
          {
            key: "Тип лекарственной терапии",
            value: therapyTranslates.chemoType[chemoTherapy.chemoType],
          },
          {
            key: "Линия",
            value: chemoTherapy.line,
          },
          {
            key: "Токсичность (осложненения)",
            value: therapyTranslates.toxicityType[chemoTherapy.toxicityType],
          },
          {
            key: "Температура тела",
            value:
              therapyTranslates.bodyTemperature[chemoTherapy.bodyTemperature],
          },
          {
            key: "Виды токсичности",
            column: true,
            value: Boolean(chemoTherapy.elseToxicities.length) && (
              <EnumInfoBadge
                infos={chemoTherapy.elseToxicities.map(
                  (elem) => therapyTranslates.toxicitySpecies[elem]
                )}
              />
            ),
          },
          {
            key: "Гематологическая токсичность",
            column: true,
            value: Boolean(chemoTherapy.hematologicalToxicities.length) && (
              <EnumInfoBadge
                infos={chemoTherapy.hematologicalToxicities.map(
                  (elem) => therapyTranslates.hematologicalToxicity[elem]
                )}
              />
            ),
          },
          {
            key: "Гастроинстестинальная токсичность",
            column: true,
            value: Boolean(chemoTherapy.gastroToxicities.length) && (
              <EnumInfoBadge
                infos={chemoTherapy.gastroToxicities.map(
                  (elem) => therapyTranslates.gastroToxicity[elem]
                )}
              />
            ),
          },
        ]}
      />
    </Wrapper>
  );
};
