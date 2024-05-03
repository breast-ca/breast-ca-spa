import { FC, useEffect } from "react";
import { Wrapper } from "./CreateRadiationTherapyForm.styled";
import { Props } from "./CreateRadiationTherapyForm.types";
import { FormItem } from "@/components/FormItem";
import { Input, Select } from "antd";
import { CreateRadiationTherapyDto, RadiationTherapyType } from "@/api/shared";
import { useFormik } from "formik";
import { validationSchema } from "./CreateRadiationTherapyForm.constants";
import { createTherapyService } from "../createTherapyService.model";
import { ErrorMessage } from "@/components/ErrorMessage";

const { inputs } = createTherapyService;

export const CreateRadiationTherapyForm: FC<Props> = ({ handlePushState }) => {
  const { values, handleChange, setFieldValue, handleSubmit, errors } =
    useFormik({
      initialValues: {
        coursesAmount: null as number | null,
        radiationFullAmount: null as number | null,
        radiationOnceAmount: null as number | null,
        radiationTherapyType: null as RadiationTherapyType | null,
      },
      validationSchema,
      onSubmit: (values) => {
        handlePushState({
          radiationTherapy: values as CreateRadiationTherapyDto,
        });
      },
    });

  useEffect(
    () => inputs.handleSaveTherapy.watch(() => handleSubmit()).unsubscribe,
    [handleSubmit]
  );

  return (
    <Wrapper>
      <FormItem label="Вид лучевой терапии">
        <Select
          placeholder="Выберите"
          size="large"
          value={values.radiationTherapyType}
          onChange={(value) => setFieldValue("radiationTherapyType", value)}
          status={errors.radiationTherapyType && "error"}
        >
          {Object.values(RadiationTherapyType).map((elem) => (
            <Select.Option value={elem}>{elem}</Select.Option>
          ))}
        </Select>
        <ErrorMessage>{errors.radiationTherapyType}</ErrorMessage>
      </FormItem>
      <FormItem label="Количество сеансов">
        <Input
          size="large"
          type="number"
          placeholder="Введите кол-во сеансов"
          value={values.coursesAmount ?? ""}
          onChange={handleChange}
          name="coursesAmount"
          status={errors.coursesAmount && "error"}
        />
        <ErrorMessage>{errors.coursesAmount}</ErrorMessage>
      </FormItem>
      <FormItem label="РОД">
        <Input
          size="large"
          type="number"
          placeholder="Введите РОД"
          name="radiationOnceAmount"
          onChange={handleChange}
          value={values.radiationOnceAmount ?? ""}
          status={errors.radiationOnceAmount && "error"}
        />
        <ErrorMessage>{errors.radiationOnceAmount}</ErrorMessage>
      </FormItem>
      <FormItem label="CОД">
        <Input
          size="large"
          type="number"
          placeholder="Введите СОД"
          name="radiationFullAmount"
          onChange={handleChange}
          value={values.radiationFullAmount ?? ""}
          status={errors.radiationFullAmount && "error"}
        />
        <ErrorMessage>{errors.radiationFullAmount}</ErrorMessage>
      </FormItem>
    </Wrapper>
  );
};
