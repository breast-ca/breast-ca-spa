import { useUnit } from "effector-react";
import { createDiseaseModalService } from ".";
import { Modal } from "@/components/Modal";
import { FormWrapper, Grid } from "./createDiseaseModalService.styled";
import { FormItem } from "@/components/FormItem";
import { Input, Select } from "antd";
import {
  DiseaseTranslateDto,
  ICD,
  ProgressionType,
  ReconstructionType,
  RelapseType,
  Side,
  TumorState,
} from "@/api/shared";
import { FC } from "react";
import { useFormik } from "formik";
import TextArea from "antd/es/input/TextArea";

export const CreateDiseaseModalContainer: FC<{
  diseaseEnums: DiseaseTranslateDto;
}> = ({ diseaseEnums }) => {
  const { closeModal, isOpen } = useUnit({
    isOpen: createDiseaseModalService.outputs.$isModalOpen,
    closeModal: createDiseaseModalService.inputs.closeModal,
  });

  const { values, setFieldValue, handleChange } = useFormik({
    initialValues: {
      ICD: null as ICD | null,
      Number: null as number | null,
      Name: "",
      tumorState: null as TumorState | null,
      side: null as Side | null,
      reconstruction: null as ReconstructionType | null,
      progressions: null as ProgressionType | null,
      relapses: null as RelapseType | null,
      description: "",
    },
    onSubmit: () => {},
  });

  return (
    <Modal
      title="Создать паспорт заболевания"
      isOpen={isOpen}
      handleClose={closeModal}
    >
      <FormWrapper>
        <Grid temp="1fr 1fr">
          <FormItem label="Код МКБ">
            <Select
              placeholder="Укажите код МКБ"
              value={values.ICD}
              onChange={(icd) => setFieldValue("ICD", icd)}
            >
              {Object.values(ICD).map((icd) => (
                <Select.Option key={icd} value={icd}>
                  {diseaseEnums.ICDCodes[icd]}
                </Select.Option>
              ))}
            </Select>
          </FormItem>
          <FormItem label="Номер опухоли">
            <Input type="number" placeholder="Введите номер опухоли" />
          </FormItem>
        </Grid>
        <FormItem label="Описание диагноза">
          <TextArea
            name="description"
            value={values.description}
            onChange={handleChange}
            placeholder="Введите описание"
          />
        </FormItem>
        <FormItem label="Сторона поражения">
          <Select placeholder="Выберите тип">
            {Object.values(Side).map((side) => (
              <Select.Option key={side} value={side}>
                {diseaseEnums.sideTranslates[side]}
              </Select.Option>
            ))}
          </Select>
        </FormItem>
        <FormItem label="Тип состояния опухолевого процесса">
          <Select
            placeholder="Выберите тип"
            value={values.tumorState}
            onChange={(tumorState) => setFieldValue("tumorState", tumorState)}
          >
            {Object.values(TumorState).map((tumorState) => (
              <Select.Option key={tumorState} value={tumorState}>
                {diseaseEnums.tumorStateTranslates[tumorState]}
              </Select.Option>
            ))}
          </Select>
        </FormItem>
      </FormWrapper>
    </Modal>
  );
};
