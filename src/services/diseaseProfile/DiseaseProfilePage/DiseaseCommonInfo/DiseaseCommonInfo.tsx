import { FC, useMemo } from "react";
import { Wrapper } from "./DiseaseCommonInfo.styled";
import { Props } from "./DiseaseCommonInfo.types";
import { CommonInfo } from "@/components/CommonInfo";
import { CommonInfoItem } from "@/components/CommonInfo/CommonInfo.types";

export const DiseaseCommonInfo: FC<Props> = ({ disease, diseaseEnums }) => {
  const infos = useMemo(() => {
    const infos: CommonInfoItem[] = [
      {
        key: "МКБ",
        value: diseaseEnums.ICDCodes[disease.ICD],
      },
      {
        key: "Номер опухоли",
        value: `№${disease.number}`,
      },
      {
        key: "Сторона поражения",
        value: diseaseEnums.sideTranslates[disease.side],
      },
      {
        key: "Описание диагноза",
        value: disease.description,
        column: true,
      },
      {
        key: "Тип состояния опухолевого процесса",
        value: diseaseEnums.tumorStateTranslates[disease.tumorState],
      },
    ];

    if (disease.relapsePlace) {
      infos.push(
        {
          key: "Тип рецидива",
          value: diseaseEnums.relapsePlace[disease.relapsePlace],
        },
        {
          key: "Место рецидива",
          value: disease.relapses,
        }
      );
    }

    return infos;
  }, [disease, diseaseEnums]);

  return (
    <Wrapper>
      <CommonInfo items={infos} card />
    </Wrapper>
  );
};
