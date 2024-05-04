import { FC, useEffect } from "react";
import { Wrapper } from "./EditOperationForm.styled";
import { Props } from "./EditOperationForm.types";
import { FormItem } from "@/components/FormItem";
import {
  LaterOperationComplication,
  OperationComplication,
} from "@/api/shared";
import { Select } from "antd";
import { useFormik } from "formik";
import { editTherapyService } from "../../editTherapyService.model";

const {
  inputs: { handleSaveTherapy },
} = editTherapyService;

export const EditOperationForm: FC<Props> = ({
  therapiesTranslates,
  operation,
  handlePushState,
}) => {
  const { values, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      operationComplications: operation.operationComplications || [],
      laterOperationComplications: operation.laterOperationComplications || [],
    },
    onSubmit: (values) => {
      handlePushState({ operation: values });
    },
  });

  useEffect(() => {
    return handleSaveTherapy.watch(() => handleSubmit()).unsubscribe;
  }, [handleSubmit]);

  return (
    <Wrapper>
      <FormItem label="Ранние осложнения">
        <Select
          placeholder="Введите ранние осложнения"
          size="large"
          mode="multiple"
          value={values.operationComplications}
          onChange={(value) => setFieldValue("operationComplications", value)}
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
          value={values.laterOperationComplications}
          onChange={(value) =>
            setFieldValue("laterOperationComplications", value)
          }
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
