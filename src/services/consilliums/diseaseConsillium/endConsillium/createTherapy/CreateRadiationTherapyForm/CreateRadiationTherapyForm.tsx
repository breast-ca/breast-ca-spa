import { FC } from "react";
import { Wrapper } from "./CreateRadiationTherapyForm.styled";
import { Props } from "./CreateRadiationTherapyForm.types";
import { FormItem } from "@/components/FormItem";
import { Input, Select } from "antd";
import { RadiationTherapyType } from "@/api/shared";

export const CreateRadiationTherapyForm: FC<Props> = () => {
  return (
    <Wrapper>
      <FormItem label="Вид лучевой терапии">
        <Select placeholder="Выберите" size="large">
          {Object.values(RadiationTherapyType).map((elem) => (
            <Select.Option value={elem}>{elem}</Select.Option>
          ))}
        </Select>
      </FormItem>
      <FormItem label="Количество сеансов">
        <Input size="large" placeholder="Введите кол-во сеансов" />
      </FormItem>
      <FormItem label="РОД">
        <Input size="large" placeholder="Введите РОД" />
      </FormItem>
      <FormItem label="CОД">
        <Input size="large" placeholder="Введите СОД" />
      </FormItem>
    </Wrapper>
  );
};
