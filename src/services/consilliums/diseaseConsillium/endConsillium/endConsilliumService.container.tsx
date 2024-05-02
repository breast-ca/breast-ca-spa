import { useUnit } from "effector-react";
import { endConsilliumService } from "./endConsilliumService.model";
import { Modal } from "@/components/Modal";
import { FormItem } from "@/components/FormItem";
import { Select } from "antd";
import { FC } from "react";
import TextArea from "antd/es/input/TextArea";
import { Wrapper } from "./endConsilliumService.styled";
import { AnalysisTranslatesQuery } from "@/services/analysis/analysisService.api";
import { AnalysisType } from "@/api/shared";
import { awailableAnalysisTypes } from "@/services/analysis/createAnalysis/createAnalysisService.container";
import { useFormik } from "formik";
import { endConsilliumMutation } from "./endConsilliumService.api";
import { diseaseQuery } from "@/services/diseaseProfile/diseaseProfileService.api";
import { Button } from "@/components/Button";
import { PlusCircle } from "react-bootstrap-icons";
import { CreateTherapyContainer, createTherapyService } from "./createTherapy";

const { inputs, outputs } = endConsilliumService;

export const EndConsilliumContainer: FC<{ id: number }> = ({ id }) => {
  const {
    isOpen,
    close,
    analysisTranslates,
    handleEnd,
    disease,
    handleCreateTherapy,
  } = useUnit({
    isOpen: outputs.$isModalOpen,
    close: inputs.closeModal,
    analysisTranslates: AnalysisTranslatesQuery.$data,
    handleEnd: endConsilliumMutation.start,
    disease: diseaseQuery.$data,
    handleCreateTherapy: createTherapyService.inputs.openModal,
  });

  const { values, setFieldValue, handleChange, handleSubmit } = useFormik({
    initialValues: {
      analysisType: [] as AnalysisType[],
      description: "",
    },
    onSubmit: (values) => {
      if (!disease) return;

      handleEnd({ ...values, diseaseId: disease.id, consilliumId: id });
    },
  });

  if (!analysisTranslates) return null;

  return (
    <>
      <CreateTherapyContainer />
      <Modal
        isOpen={isOpen}
        handleClose={close}
        title="Завершить консиллиум"
        handleSubmit={handleSubmit}
      >
        <Wrapper>
          <FormItem label="Анализы">
            <Select
              size="large"
              placeholder="Выберите анализы"
              mode="multiple"
              value={values.analysisType}
              onChange={(value) => setFieldValue("analysisType", value)}
            >
              {Object.values(AnalysisType).map((type) => (
                <Select.Option
                  key={type}
                  value={type}
                  disabled={!awailableAnalysisTypes.includes(type)}
                >
                  {analysisTranslates.analysis[type]}
                </Select.Option>
              ))}
            </Select>
          </FormItem>
          <FormItem label="Лечение">
            <Button
              floating
              icon={<PlusCircle />}
              onClick={handleCreateTherapy}
            >
              Новое лечение
            </Button>
          </FormItem>
          <FormItem label="Заключение">
            <TextArea
              value={values.description}
              onChange={handleChange}
              name="description"
              size="large"
              placeholder="Введите заключение"
            />
          </FormItem>
        </Wrapper>
      </Modal>
    </>
  );
};
