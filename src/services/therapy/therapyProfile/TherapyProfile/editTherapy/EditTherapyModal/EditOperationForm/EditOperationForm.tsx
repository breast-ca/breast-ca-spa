import { FC } from "react";
import { Wrapper } from "./EditOperationForm.styled";
import { Props } from "./EditOperationForm.types";
import { FormItem } from "@/components/FormItem";
import {
  LaterOperationComplication,
  OperationComplication,
} from "@/api/shared";
import { Select } from "antd";

export const EditOperationForm: FC<Props> = ({ therapiesTranslates }) => {
  return (
    <Wrapper>
      <FormItem label="Ранние осложнения">
        <Select
          placeholder="Введите ранние осложнения"
          size="large"
          mode="multiple"
        >
          {Object.values(OperationComplication).map((elem) => (
            <Select.Option key={elem} value={elem}>
              {therapiesTranslates.operationComplication[elem]}
            </Select.Option>
          ))}
        </Select>
      </FormItem>
      <FormItem label="Поздние осложнения">
        <Select
          placeholder="Введите ранние осложнения"
          size="large"
          mode="multiple"
        >
          {Object.values(LaterOperationComplication).map((elem) => (
            <Select.Option key={elem} value={elem}>
              {therapiesTranslates.laterOperationComplication[elem]}
            </Select.Option>
          ))}
        </Select>
      </FormItem>
    </Wrapper>
  );
};
