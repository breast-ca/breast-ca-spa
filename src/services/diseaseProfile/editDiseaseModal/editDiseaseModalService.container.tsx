import { Modal } from "@/components/Modal";
import { useUnit } from "effector-react";
import { editDiseaseModalService } from ".";
import { validationSchema } from "./editDiseaseModalService.constants";
import {
  EditDiseaseDto,
  ICD,
  ProgressionType,
  ReconstructionType,
  RelapsePlace,
  RelapseType,
  Side,
  TumorState,
} from "@/api/shared";
import { Input, Select, message } from "antd";
import { useFormik } from "formik";
import { editDiseaseMutation } from "./editDiseaseModalService.api";
import { FormWrapper, Grid } from "./editDiseaseModalService.styled";
import { FormItem } from "@/components/FormItem";
import { diseaseEnumsTranslationsQuery } from "@/services/patients/patientProfile/PatientsProfile/diseasesList/diseasesListService.api";
import { ErrorMessage } from "@/components/ErrorMessage";
import TextArea from "antd/es/input/TextArea";
import { useEffect } from "react";

export const EditDiseaseModalContainer = () => {
  const { payload, handleClose, handleEdit, diseaseEnums } = useUnit({
    payload: editDiseaseModalService.outputs.$payload,
    handleClose: editDiseaseModalService.inputs.handleClose,
    handleEdit: editDiseaseMutation.start,
    diseaseEnums: diseaseEnumsTranslationsQuery.$data,
  });

  const {
    values,
    setFieldValue,
    handleChange,
    errors,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      ICD: payload?.ICD,
      number: payload?.number,
      description: payload?.description,
      tumorState: payload?.tumorState,
      side: payload?.side,
      reconstruction: payload?.reconstruction,
      progressions: payload?.progressions,
      relapses: payload?.relapses,
      relapsePlace: payload?.relapsePlace,
    },
    validationSchema,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: (values): void => {
      if (!payload || !diseaseEnums) return;

      const data: EditDiseaseDto = {
        ICD: values.ICD!,
        number: values.number!,
        description: values.description,
        tumorState: values.tumorState!,
        side: values.side!,
      };

      if (values.tumorState === TumorState.Relapse) {
        if (!values.relapsePlace) {
          message.error("Необходимо выбрать тип рецидива");
          return;
        }

        if (
          values.relapsePlace === RelapsePlace.Regional &&
          !values?.relapses?.length
        ) {
          message.error("Необходимо выбрать место рецидива");
          return;
        }

        data["relapsePlace"] = values.relapsePlace;
        data["relapses"] = values.relapses;
      }

      if (values.tumorState === TumorState.Reconstruction) {
        if (!values.reconstruction) {
          message.error("Необходимо выбрать тип реконструкции");
          return;
        }

        data["reconstruction"] = values.reconstruction;
      }

      if (values.tumorState === TumorState.Progression) {
        if (!values?.progressions?.length) {
          message.error("Необходимо выбрать место прогрессии");
          return;
        }

        data["progressions"] = values.progressions;
      }

      handleEdit({ ...data, id: payload.id });
    },
  });

  useEffect(() => {
    return resetForm;
  }, [resetForm]);

  if (!payload || !diseaseEnums) return null;

  return (
    <Modal
      title="Редактировать"
      isOpen={Boolean(payload)}
      handleClose={handleClose}
      handleSubmit={handleSubmit}
    >
      <FormWrapper>
        <Grid temp="1fr 1fr">
          <FormItem label="Код МКБ">
            <Select
              disabled
              placeholder="Укажите код МКБ"
              value={values.ICD}
              onChange={(icd) => setFieldValue("ICD", icd)}
              status={errors.ICD ? "error" : void 0}
            >
              {Object.values(ICD).map((icd) => (
                <Select.Option key={icd} value={icd}>
                  {diseaseEnums.ICDCodes[icd]}
                </Select.Option>
              ))}
            </Select>
            {errors.ICD && <ErrorMessage>{errors.ICD}</ErrorMessage>}
          </FormItem>
          <FormItem label="Номер опухоли">
            <Input
              disabled
              value={values.number || ""}
              name="number"
              onChange={handleChange}
              type="number"
              placeholder="Введите номер опухоли"
              status={errors.number ? "error" : void 0}
            />
            {errors.number && <ErrorMessage>{errors.number}</ErrorMessage>}
          </FormItem>
        </Grid>
        <FormItem label="Описание диагноза">
          <TextArea
            name="description"
            value={values.description}
            onChange={handleChange}
            placeholder="Введите описание"
            status={errors.description ? "error" : void 0}
          />
          {errors.description && (
            <ErrorMessage>{errors.description}</ErrorMessage>
          )}
        </FormItem>
        <FormItem label="Сторона поражения">
          <Select
            placeholder="Выберите сторону"
            value={values.side}
            onChange={(side) => setFieldValue("side", side)}
            status={errors.side ? "error" : void 0}
          >
            {Object.values(Side).map((side) => (
              <Select.Option key={side} value={side}>
                {diseaseEnums.sideTranslates[side]}
              </Select.Option>
            ))}
          </Select>
          {errors.side && <ErrorMessage>{errors.side}</ErrorMessage>}
        </FormItem>
        <FormItem label="Тип состояния опухолевого процесса">
          <Select
            disabled
            placeholder="Выберите тип"
            value={values.tumorState}
            onChange={(tumorState) => setFieldValue("tumorState", tumorState)}
            status={errors.tumorState ? "error" : void 0}
          >
            {Object.values(TumorState).map((tumorState) => (
              <Select.Option key={tumorState} value={tumorState}>
                {diseaseEnums.tumorStateTranslates[tumorState]}
              </Select.Option>
            ))}
          </Select>
          {errors.tumorState && (
            <ErrorMessage>{errors.tumorState}</ErrorMessage>
          )}
        </FormItem>
        {values.tumorState === TumorState.Reconstruction && (
          <FormItem label="Тип реконструкции">
            <Select
              value={values.reconstruction}
              placeholder="Выберите тип"
              onChange={(type) => setFieldValue("reconstruction", type)}
            >
              {Object.values(ReconstructionType).map((reconstruction) => (
                <Select.Option key={reconstruction} value={reconstruction}>
                  {diseaseEnums.reconstructionTranslates[reconstruction]}
                </Select.Option>
              ))}
            </Select>
          </FormItem>
        )}
        {values.tumorState === TumorState.Relapse && (
          <>
            <FormItem label="Тип рецидива">
              <Select
                placeholder="Выберите тип"
                value={values.relapsePlace}
                onChange={(type) => setFieldValue("relapsePlace", type)}
              >
                {Object.values(RelapsePlace).map((place) => (
                  <Select.Option key={place} value={place}>
                    {diseaseEnums.relapsePlace[place]}
                  </Select.Option>
                ))}
              </Select>
            </FormItem>
            {values.relapsePlace === RelapsePlace.Regional && (
              <FormItem label="Место рецидива">
                <Select
                  placeholder="Выберите тип"
                  mode="multiple"
                  value={values.relapses}
                  onChange={(type) => setFieldValue("relapses", type)}
                >
                  {Object.values(RelapseType).map((reconstruction) => (
                    <Select.Option key={reconstruction} value={reconstruction}>
                      {diseaseEnums.relapseTranslates[reconstruction]}
                    </Select.Option>
                  ))}
                </Select>
              </FormItem>
            )}
          </>
        )}
        {values.tumorState === TumorState.Progression && (
          <FormItem label="Место прогрессирования">
            <Select
              mode="multiple"
              placeholder="Выберите"
              value={values.progressions}
              onChange={(progressions) =>
                setFieldValue("progressions", progressions)
              }
            >
              {Object.values(ProgressionType).map((progression) => (
                <Select.Option key={progression} value={progression}>
                  {diseaseEnums.progressionTranslates[progression]}
                </Select.Option>
              ))}
            </Select>
          </FormItem>
        )}
      </FormWrapper>
    </Modal>
  );
};
