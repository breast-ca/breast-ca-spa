import { FC, useEffect } from "react";
import { Wrapper } from "./EditRadiationForm.styled";
import { Props } from "./EditRadiationForm.types";
import { editTherapyService } from "../../editTherapyService.model";
import { useFormik } from "formik";
import { FormItem } from "@/components/FormItem";
import { Select } from "antd";
import {
  ComplicationType,
  RadiationComplicationType,
  TherapyDynamic,
} from "@/api/shared";

const {
  inputs: { handleSaveTherapy },
} = editTherapyService;

export const EditRadiationForm: FC<Props> = ({
  radiation,
  therapy,
  therapiesTranslates,
  handlePushState,
}) => {
  const { handleSubmit, values, setFieldValue } = useFormik({
    initialValues: {
      therapyDynamic: therapy.therapyDynamic,
      complicationType: radiation.complicationType,
      radiatonComplicationTypes: radiation.radiatonComplicationTypes,
    },
    onSubmit: (values) => {
      handlePushState({ radiation: values });
    },
  });

  useEffect(() => {
    return handleSaveTherapy.watch(() => handleSubmit()).unsubscribe;
  }, [handleSubmit]);

  return (
    <Wrapper>
      <FormItem label="Динамика">
        <Select
          size="large"
          placeholder="Выберите"
          value={values.therapyDynamic}
          onChange={(value) => setFieldValue("therapyDynamic", value)}
        >
          {Object.values(TherapyDynamic).map((elem) => (
            <Select.Option key={elem} value={elem}>
              {therapiesTranslates.therapyDynamic[elem]}
            </Select.Option>
          ))}
        </Select>
      </FormItem>
      <FormItem label="Наличие осложнений">
        <Select
          size="large"
          placeholder="Выберите"
          value={values.complicationType}
          onChange={(value) => setFieldValue("complicationType", value)}
        >
          {Object.values(ComplicationType).map((elem) => (
            <Select.Option key={elem} value={elem}>
              {therapiesTranslates.complicationType[elem]}
            </Select.Option>
          ))}
        </Select>
      </FormItem>
      <FormItem label="Осложнения">
        <Select
          placeholder="Выберите"
          size="large"
          mode="multiple"
          value={values.radiatonComplicationTypes}
          onChange={(value) =>
            setFieldValue("radiatonComplicationTypes", value)
          }
        >
          {Object.values(RadiationComplicationType).map((elem) => (
            <Select.Option key={elem}>
              {therapiesTranslates.radiationComplicationType[elem]}
            </Select.Option>
          ))}
        </Select>
      </FormItem>
    </Wrapper>
  );
};
