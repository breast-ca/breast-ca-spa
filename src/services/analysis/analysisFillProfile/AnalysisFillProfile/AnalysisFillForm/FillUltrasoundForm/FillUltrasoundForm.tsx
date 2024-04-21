import { FC } from "react";
import { Wrapper } from "./FillUltrasoundForm.styled";
import { Props } from "./FillUltrasoundForm.types";
import { FormItem } from "@/components/FormItem";
import { Input, Select } from "antd";

export const FillUltrasoundForm: FC<Props> = () => {
  return (
    <Wrapper>
      <FormItem label="Размер опухоли">
        <Input placeholder="Введите размер опухоли" />
      </FormItem>
      <FormItem label="Описание">
        <Input placeholder="Выберите злокачественность опухоль" />
      </FormItem>
      <FormItem label="Сторона поражение">
        <Select placeholder="Выберите сторону"></Select>
      </FormItem>
      <FormItem label="Количество мтс">
        <Input placeholder="Выберите количество мтс" />
      </FormItem>
      <FormItem label="Область мтс">
        <Select placeholder="Выберите область"></Select>
      </FormItem>
      <FormItem label="Число BIR">
        <Select placeholder="Выберите число BIR"></Select>
      </FormItem>
    </Wrapper>
  );
};
