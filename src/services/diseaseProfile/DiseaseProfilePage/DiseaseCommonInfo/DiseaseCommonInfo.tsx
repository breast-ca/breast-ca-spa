import { FC } from "react";
import { Wrapper } from "./DiseaseCommonInfo.styled";
import { Props } from "./DiseaseCommonInfo.types";
import { CommonInfo } from "@/components/CommonInfo";
import { CommonInfoItem } from "@/components/CommonInfo/CommonInfo.types";

export const DiseaseCommonInfo: FC<Props> = ({ disease, diseaseEnums }) => {
  const infos: CommonInfoItem[] = [
    {
      key: "МКБ",
      value: diseaseEnums.ICDCodes[disease.ICD],
    },
  ];

  return (
    <Wrapper>
      <CommonInfo items={infos} />
    </Wrapper>
  );
};
