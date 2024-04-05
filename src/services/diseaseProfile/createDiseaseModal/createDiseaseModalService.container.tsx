import { useUnit } from "effector-react";
import { createDiseaseModalService } from ".";
import { Modal } from "@/components/Modal";
import { FormWrapper, Grid } from "./createDiseaseModalService.styled";
import { FormItem } from "@/components/FormItem";
import { Input, Select, message } from "antd";
import {
  CreateDiseaseDto,
  DiseaseTranslateDto,
  ICD,
  ProgressionType,
  ReconstructionType,
  RelapsePlace,
  RelapseType,
  Side,
  TumorState,
} from "@/api/shared";
import { FC, useEffect } from "react";
import { useFormik } from "formik";
import TextArea from "antd/es/input/TextArea";
import { validationSchema } from "./createDiseaseModalService.constants";
import { ErrorMessage } from "@/components/ErrorMessage";
import { getRandomColors } from "./createDiseaseModalService.utils";
import { patientQuery } from "../../patients/patientProfile/patientProfileService.api";
import { createDiseaseMutation } from "./createDiseaseModalService.api";

export const CreateDiseaseModalContainer: FC<{
  diseaseEnums: DiseaseTranslateDto;
}> = ({ diseaseEnums }) => {
  const { closeModal, isOpen, handleCreateDisease, patient } = useUnit({
    isOpen: createDiseaseModalService.outputs.$isModalOpen,
    closeModal: createDiseaseModalService.inputs.closeModal,
    handleCreateDisease: createDiseaseMutation.start,
    patient: patientQuery.$data,
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
      ICD: null as ICD | null,
      number: null as number | null,
      description: "",
      tumorState: null as TumorState | null,
      side: null as Side | null,
      reconstruction: null as ReconstructionType | null,
      progressions: [] as ProgressionType[],
      relapses: [] as RelapseType[],
      relapsePlace: null as RelapsePlace | null,
    },
    validationSchema,
    validateOnChange: false,
    enableReinitialize: true,
    onSubmit: (values): void => {
      const { colour1, colour2 } = getRandomColors();

      const data: CreateDiseaseDto = {
        ICD: values.ICD!,
        number: values.number!,
        description: values.description,
        tumorState: values.tumorState!,
        side: values.side!,
        colour1,
        colour2,
      };

      if (values.tumorState === TumorState.Relapse) {
        if (!values.relapsePlace) {
          message.error("Необходимо выбрать тип рецидива");
          return;
        }

        if (
          values.relapsePlace === RelapsePlace.Regional &&
          !values.relapses.length
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
        if (!values.progressions.length) {
          message.error("Необходимо выбрать место прогрессии");
          return;
        }

        data["progressions"] = values.progressions;
      }

      if (!patient) {
        message.error("Ошибка системы");
        return;
      }

      handleCreateDisease({ ...data, patientId: patient.id });
    },
  });

  useEffect(() => {
    return createDiseaseMutation.finished.success.watch(() => resetForm())
      .unsubscribe;
  }, [resetForm]);

  useEffect(() => {
    if (!values.ICD) return;

    setFieldValue("description", diseaseEnums.ICDDescriptions[values.ICD]);
  }, [diseaseEnums.ICDDescriptions, setFieldValue, values.ICD]);

  return (
    <Modal
      title="Создать паспорт заболевания"
      isOpen={isOpen}
      handleSubmit={handleSubmit}
      handleClose={closeModal}
    >
      <FormWrapper>
        <Grid temp="1fr 1fr">
          <FormItem label="Код МКБ">
            <Select
              size="large"
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
              size="large"
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
            size="large"
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
            size="large"
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
            size="large"
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
              size="large"
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
                size="large"
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
                  size="large"
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
              size="large"
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
