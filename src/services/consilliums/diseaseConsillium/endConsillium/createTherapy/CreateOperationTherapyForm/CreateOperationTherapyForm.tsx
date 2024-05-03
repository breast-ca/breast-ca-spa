import { FC, useEffect } from "react";
import { Wrapper } from "./CreateOperationTherapyForm.styled";
import { Props } from "./CreateOperationTherapyForm.types";
import { useFormik } from "formik";
import { CreateOperationDto, OperationType, SurgeryImpact } from "@/api/shared";
import { FormItem } from "@/components/FormItem";
import { Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import { validationSchema } from "./CreateOperationTherapyForm.constants";
import { ErrorMessage } from "@/components/ErrorMessage";
import { createTherapyService } from "../createTherapyService.model";

const { inputs } = createTherapyService;

export const CreateOperationTherapyForm: FC<Props> = ({ handlePushState }) => {
  const { values, setFieldValue, handleChange, errors, handleSubmit } =
    useFormik({
      initialValues: {
        description: "",
        operationType: null as OperationType | null,
        surgeryImpact: null as SurgeryImpact | null,
        otherSurgeryImpact: "",
      },
      validateOnChange: false,
      validationSchema,
      onSubmit: (values) => {
        handlePushState({ operation: values as CreateOperationDto });
      },
    });

  useEffect(
    () => inputs.handleSaveTherapy.watch(() => handleSubmit()).unsubscribe,
    [handleSubmit]
  );

  return (
    <Wrapper>
      <FormItem label="Вид операции">
        <Select
          placeholder="Выберите"
          value={values.operationType}
          size="large"
          onChange={(value) => {
            setFieldValue("operationType", value);
          }}
          status={errors.operationType && "error"}
        >
          {Object.values(OperationType)
            .filter((e) => e !== OperationType.Forbidden)
            .map((elem) => (
              <Select.Option key={elem} value={elem}>
                {elem}
              </Select.Option>
            ))}
        </Select>
        <ErrorMessage>{errors.operationType}</ErrorMessage>
      </FormItem>
      <FormItem label="Объем хирургического вмешательства">
        <Select
          placeholder="Выберите"
          value={values.surgeryImpact}
          size="large"
          onChange={(value) => {
            setFieldValue("surgeryImpact", value);
            setFieldValue("otherSurgeryImpact", "");
          }}
          status={errors.surgeryImpact && "error"}
        >
          {Object.values(SurgeryImpact).map((elem) => (
            <Select.Option key={elem} value={elem}>
              {elem}
            </Select.Option>
          ))}
        </Select>
        <ErrorMessage>{errors.surgeryImpact}</ErrorMessage>
      </FormItem>
      {values.surgeryImpact === SurgeryImpact.Other && (
        <FormItem label="Описание хирургического вмешательства">
          <Input
            size="large"
            value={values.otherSurgeryImpact}
            placeholder="Введите описание"
            name="otherSurgeryImpact"
            onChange={handleChange}
          />
        </FormItem>
      )}
      <FormItem label="Описание">
        <TextArea
          size="large"
          value={values.description}
          name="description"
          onChange={handleChange}
          placeholder="Введите описание"
        />
      </FormItem>
    </Wrapper>
  );
};
