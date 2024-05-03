import { FC } from "react";
import { Wrapper } from "./OperationView.styled";
import { Props } from "./OperationView.types";
import { CommonInfo } from "@/components/CommonInfo";
import { SurgeryImpact } from "@/api/shared";

export const OperationView: FC<Props> = ({ operation, therapyTranslates }) => {
  return (
    <Wrapper>
      <CommonInfo
        card
        items={[
          {
            key: "Тип операции",
            value: therapyTranslates.operationType[operation.operationType],
          },
          {
            key: "Объем хирургического вмешательства",
            value:
              operation.surgeryImpact === SurgeryImpact.Other
                ? operation.otherSurgeryImpact
                : therapyTranslates.surgeryImpact[operation.surgeryImpact],
          },
          { key: "Описание", value: operation.description },
        ]}
      />
    </Wrapper>
  );
};
