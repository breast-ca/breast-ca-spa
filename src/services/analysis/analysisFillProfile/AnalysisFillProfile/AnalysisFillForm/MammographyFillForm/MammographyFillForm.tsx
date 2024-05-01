import { FillProps } from "../FillUltrasoundForm/FillUltrasoundForm.types";
import { FC, useEffect } from "react";
import {
  TumorSizeField,
  TumorSizeWrapper,
  Wrapper,
} from "./MammographyFillForm.styled";
import { FormItem } from "@/components/FormItem";
import { Input, Select } from "antd";
import { useFormik } from "formik";
import {
  CreateMammographyDto,
  RelapseType,
  Side,
  UltrasoundDescription,
} from "@/api/shared";
import { useUnit } from "effector-react";
import { diseaseEnumsTranslationsQuery } from "@/services/patients/patientProfile/PatientsProfile/diseasesList/diseasesListService.api";
import { ErrorMessage } from "@/components/ErrorMessage";
import { validationSchema } from "./MammographyFillForm.constants";
import { analysisFillProfileService } from "../../../analysisFillProfileService.model";

const { inputs } = analysisFillProfileService;

export const MammographyFillForm: FC<FillProps> = ({
  pushFillAnalysisPayload,
  analysisTranslates,
}) => {
  const { diseaseTranslates } = useUnit({
    diseaseTranslates: diseaseEnumsTranslationsQuery.$data,
  });

  const { values, handleChange, setFieldValue, errors, handleSubmit } =
    useFormik({
      initialValues: {
        tumorSize: {
          sizeX: null as null | number,
          sizeY: null as null | number,
          sizeZ: null as null | number,
        },
        metastasisNumber: null as number | null,
        birNumber: null as number | null,
        relapseTypes: [] as RelapseType[],
        side: null as Side | null,
        description: null as UltrasoundDescription | null,
      },
      validateOnChange: false,
      onSubmit: (values) => {
        pushFillAnalysisPayload({
          mammography: values as CreateMammographyDto,
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
        <FormItem label="Размер опухоли (мм)">
          <TumorSizeWrapper>
            <TumorSizeField>
              <Input
                name="tumorSize.sizeX"
                value={values.tumorSize.sizeX ?? ""}
                type="number"
                onChange={handleChange}
                size="large"
                placeholder="X:"
                status={errors.tumorSize ? "error" : void 0}
              />
              {errors.tumorSize?.sizeX && (
                <ErrorMessage>{errors.tumorSize.sizeX}</ErrorMessage>
              )}
            </TumorSizeField>
            <TumorSizeField>
              <Input
                name="tumorSize.sizeY"
                value={values.tumorSize.sizeY ?? ""}
                type="number"
                onChange={handleChange}
                size="large"
                placeholder="Y:"
                status={errors.tumorSize ? "error" : void 0}
              />
              {errors.tumorSize?.sizeY && (
                <ErrorMessage>{errors.tumorSize.sizeY}</ErrorMessage>
              )}
            </TumorSizeField>
            <TumorSizeField>
              <Input
                name="tumorSize.sizeZ"
                value={values.tumorSize.sizeZ ?? ""}
                type="number"
                onChange={handleChange}
                size="large"
                placeholder="Z:"
                status={errors.tumorSize ? "error" : void 0}
              />
              {errors.tumorSize?.sizeZ && (
                <ErrorMessage>{errors.tumorSize.sizeZ}</ErrorMessage>
              )}
            </TumorSizeField>
          </TumorSizeWrapper>
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
