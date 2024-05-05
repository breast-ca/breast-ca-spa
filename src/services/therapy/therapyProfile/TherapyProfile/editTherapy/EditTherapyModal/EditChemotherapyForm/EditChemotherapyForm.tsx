import { FC, useEffect } from "react";
import { FirstLine, Wrapper } from "./EditChemotherapyForm.styled";
import { Props } from "./EditChemotherapyForm.types";
import { useFormik } from "formik";
import { FormItem } from "@/components/FormItem";
import { Select } from "antd";
import {
  BodyTemperature,
  GastroToxicity,
  HematologicalToxicity,
  TherapyDynamic,
  ToxicitySpecies,
  ToxicityType,
} from "@/api/shared";
import { editTherapyService } from "../../editTherapyService.model";

const {
  inputs: { handleSaveTherapy },
} = editTherapyService;

export const EditChemotherapyForm: FC<Props> = ({
  chemotherapy,
  therapy,
  therapiesTranslates,
  handlePushState,
}) => {
  const { values, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      toxicityType: chemotherapy.toxicityType,
      hematologicalToxicities: chemotherapy.hematologicalToxicities,
      bodyTemperature: chemotherapy.bodyTemperature,
      gastroToxicities: chemotherapy.gastroToxicities,
      elseToxicities: chemotherapy.elseToxicities,
      otherToxicity: chemotherapy.otherToxicity,
      therapyDynamic: therapy.therapyDynamic,
    },
    onSubmit: (values) => {
      handlePushState({ chemotherapy: values });
    },
  });

  useEffect(() => {
    return handleSaveTherapy.watch(() => handleSubmit()).unsubscribe;
  }, [handleSubmit]);

  return (
    <Wrapper>
      <FormItem label="Динамика терапии">
        <Select
          placeholder="Выберите"
          size="large"
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
      <FirstLine>
        <FormItem label="Токсичность (осложненения)">
          <Select
            placeholder="Выберите"
            value={values.toxicityType}
            onChange={(value) => setFieldValue("toxicityType", value)}
            size="large"
          >
            {Object.values(ToxicityType).map((elem) => (
              <Select.Option key={elem} value={elem}>
                {therapiesTranslates.toxicityType[elem]}
              </Select.Option>
            ))}
          </Select>
        </FormItem>
        <FormItem label="Температура тела">
          <Select
            placeholder="Выберите"
            size="large"
            value={values.bodyTemperature}
            onChange={(value) => setFieldValue("bodyTemperature", value)}
          >
            {Object.values(BodyTemperature).map((elem) => (
              <Select.Option key={elem} value={elem}>
                {therapiesTranslates.bodyTemperature[elem]}
              </Select.Option>
            ))}
          </Select>
        </FormItem>
      </FirstLine>
      <FormItem label="Виды токсичности">
        <Select
          placeholder="Выберите"
          value={values.elseToxicities}
          onChange={(value) => setFieldValue("elseToxicities", value)}
          size="large"
          mode="multiple"
        >
          {Object.values(ToxicitySpecies).map((elem) => (
            <Select.Option key={elem} value={elem}>
              {therapiesTranslates.toxicitySpecies[elem]}
            </Select.Option>
          ))}
        </Select>
      </FormItem>
      <FormItem label="Гематологическая токсичность">
        <Select
          placeholder="Выберите"
          mode="multiple"
          value={values.hematologicalToxicities}
          onChange={(value) => setFieldValue("hematologicalToxicities", value)}
          size="large"
        >
          {Object.values(HematologicalToxicity).map((elem) => (
            <Select.Option key={elem} value={elem}>
              {therapiesTranslates.hematologicalToxicity[elem]}
            </Select.Option>
          ))}
        </Select>
      </FormItem>
      <FormItem label="Гастроинстестинальная токсичность">
        <Select
          placeholder="Выберите"
          mode="multiple"
          value={values.gastroToxicities}
          size="large"
          onChange={(value) => setFieldValue("gastroToxicities", value)}
        >
          {Object.values(GastroToxicity).map((elem) => (
            <Select.Option key={elem} value={elem}>
              {therapiesTranslates.gastroToxicity[elem]}
            </Select.Option>
          ))}
        </Select>
      </FormItem>
    </Wrapper>
  );
};
