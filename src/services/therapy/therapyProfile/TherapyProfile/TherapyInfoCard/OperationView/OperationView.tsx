import { FC } from "react";
import { Wrapper } from "./OperationView.styled";
import { Props } from "./OperationView.types";
import { CommonInfo } from "@/components/CommonInfo";
import { SurgeryImpact } from "@/api/shared";
import { EnumInfoBadge } from "../shared/EnumInfoBadge";

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
          {
            key: "Ранние осложнения",
            column: true,
            value: Boolean(operation.operationComplications.length) && (
              <EnumInfoBadge
                infos={operation.operationComplications.map(
                  (elem) => therapyTranslates.operationComplication[elem]
                )}
              />
            ),
          },
          {
            key: "Поздние осложнения",
            column: true,
            value: Boolean(operation.laterOperationComplications.length) && (
              <EnumInfoBadge
                infos={operation.laterOperationComplications.map(
                  (elem) => therapyTranslates.laterOperationComplication[elem]
                )}
              />
            ),
          },
        ]}
      />
    </Wrapper>
  );
};
