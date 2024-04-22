import { FC, useEffect } from "react";
import { Wrapper } from "./FillUltrasoundForm.styled";
import { FillProps } from "./FillUltrasoundForm.types";
import { FormItem } from "@/components/FormItem";
import { Input, Select } from "antd";
import { useFormik } from "formik";
import {
  CreateUltrasoundDto,
  RelapseType,
  Side,
  UltrasoundDescription,
} from "@/api/shared";
import { useUnit } from "effector-react";
import { diseaseEnumsTranslationsQuery } from "@/services/patients/patientProfile/PatientsProfile/diseasesList/diseasesListService.api";
import { validationSchema } from "./FillUltrasoundForm.constants";
import { ErrorMessage } from "@/components/ErrorMessage";
import { analysisFillProfileService } from "../../../analysisFillProfileService.model";

const { inputs } = analysisFillProfileService;

export const FillUltrasoundForm: FC<FillProps> = ({
  analysisTranslates,
  pushFillAnalysisPayload,
}) => {
  const { diseaseTranslates } = useUnit({
    diseaseTranslates: diseaseEnumsTranslationsQuery.$data,
  });

  const { values, handleChange, setFieldValue, errors, handleSubmit } =
    useFormik({
      initialValues: {
        tumorSize: null as number | null,
        metastasisNumber: null as number | null,
        birNumber: null as number | null,
        relapseTypes: [] as RelapseType[],
        side: null as Side | null,
        description: null as UltrasoundDescription | null,
      },
      validateOnChange: false,
      onSubmit: (values) => {
        pushFillAnalysisPayload({
          ultrasound: values as CreateUltrasoundDto,
        });
      },
      validationSchema,
    });

  useEffect(
    () =>
      inputs.handleSaveAnalysisButtonClicked.watch(() => handleSubmit())
        .unsubscribe,
    [handleSubmit]
  );

  return (
    <>
      <FormItem label="Описание">
        <Select
          value={values.description}
          onChange={(value) => setFieldValue("description", value)}
          size="large"
          placeholder="Выберите злокачественность опухоль"
          status={errors.description ? "error" : void 0}
        >
          {Object.values(UltrasoundDescription).map((value) => (
            <Select key={value}>
              {analysisTranslates.ultrasoundDescription[value]}
            </Select>
          ))}
        </Select>
        {errors.description && (
          <ErrorMessage>{errors.description}</ErrorMessage>
        )}
      </FormItem>
      <Wrapper>
        <FormItem label="Размер опухоли">
          <Input
            name="tumorSize"
            value={values.tumorSize ?? ""}
            type="number"
            onChange={handleChange}
            suffix="мм"
            size="large"
            placeholder="Введите размер опухоли"
            status={errors.tumorSize ? "error" : void 0}
          />
          {errors.tumorSize && <ErrorMessage>{errors.tumorSize}</ErrorMessage>}
        </FormItem>
        <FormItem label="Сторона поражение">
          <Select
            value={values.side}
            onChange={(value) => setFieldValue("side", value)}
            size="large"
            placeholder="Выберите сторону"
            status={errors.side ? "error" : void 0}
          >
            {Object.values(Side).map((side) => (
              <Select.Option key={side}>
                {diseaseTranslates?.sideTranslates[side]}
              </Select.Option>
            ))}
          </Select>
          {errors.side && <ErrorMessage>{errors.side}</ErrorMessage>}
        </FormItem>
        <FormItem label="Количество мтс">
          <Input
            value={values.metastasisNumber ?? ""}
            name="metastasisNumber"
            onChange={handleChange}
            size="large"
            type="number"
            placeholder="Выберите количество мтс"
            status={errors.metastasisNumber ? "error" : void 0}
          />
          {errors.metastasisNumber && (
            <ErrorMessage>{errors.metastasisNumber}</ErrorMessage>
          )}
        </FormItem>

        <FormItem label="Число BIR">
          <Select
            size="large"
            placeholder="Выберите число BIR"
            value={values.birNumber}
            onChange={(value) => setFieldValue("birNumber", value)}
            status={errors.birNumber ? "error" : void 0}
          >
            {new Array(6)
              .fill(null)
              .map((_, index) => index)
              .map((value) => (
                <Select.Option key={value} value={value}>
                  {value}
                </Select.Option>
              ))}
          </Select>
          {errors.birNumber && <ErrorMessage>{errors.birNumber}</ErrorMessage>}
        </FormItem>
      </Wrapper>
      <FormItem label="Область мтс">
        <Select
          size="large"
          placeholder="Выберите область"
          mode="multiple"
          value={values.relapseTypes}
          onChange={(value) => setFieldValue("relapseTypes", value)}
          status={errors.relapseTypes ? "error" : void 0}
        >
          {Object.values(RelapseType).map((type) => (
            <Select.Option key={type} value={type}>
              {diseaseTranslates?.relapseTranslates[type]}
            </Select.Option>
          ))}
        </Select>
        {errors.relapseTypes && (
          <ErrorMessage>{errors.relapseTypes}</ErrorMessage>
        )}
      </FormItem>
    </>
  );
};
