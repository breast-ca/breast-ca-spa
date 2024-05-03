import { FC, useEffect } from "react";
import { Wrapper } from "./CreateChemoTherapyForm.styled";
import { Props } from "./CreateChemoTherapyForm.types";
import { useFormik } from "formik";
import { ChemoType, CreateChemoTherapyDto } from "@/api/shared";
import { FormItem } from "@/components/FormItem";
import { Input, Select } from "antd";
import { validationSchema } from "./CreateChemoTherapyForm.constants";
import { ErrorMessage } from "@/components/ErrorMessage";
import { createTherapyService } from "../createTherapyService.model";

const { inputs } = createTherapyService;

export const CreateChemoTherapyForm: FC<Props> = ({
  handlePushState,
  therapyTranslates,
}) => {
  const { values, handleChange, setFieldValue, errors, handleSubmit } =
    useFormik({
      initialValues: {
        chemoType: null as ChemoType | null,
        line: null as null | number,
      },
      validateOnChange: false,
      validationSchema,
      onSubmit: (values) => {
        handlePushState({ chemoTherapy: values as CreateChemoTherapyDto });
      },
    });

  useEffect(
    () => inputs.handleSaveTherapy.watch(() => handleSubmit()).unsubscribe,
    [handleSubmit]
  );

  return (
    <Wrapper>
      <FormItem label="Тип лекарственной терапии">
        <Select
          value={values.chemoType}
          placeholder="Выберите"
          size="large"
          onChange={(value) => setFieldValue("chemoType", value)}
          status={errors.chemoType && "error"}
        >
          {Object.values(ChemoType).map((type) => (
            <Select.Option key={type} value={type}>
              {therapyTranslates.chemoType[type]}
            </Select.Option>
          ))}
        </Select>
        <ErrorMessage>{errors.chemoType}</ErrorMessage>
      </FormItem>
      <FormItem label="Линия">
        <Input
          type="number"
          size="large"
          value={values.line ?? ""}
          name="line"
          onChange={handleChange}
          placeholder="Введите линию"
          status={errors.line && "error"}
        />
        <ErrorMessage>{errors.line}</ErrorMessage>
      </FormItem>
    </Wrapper>
  );
};
