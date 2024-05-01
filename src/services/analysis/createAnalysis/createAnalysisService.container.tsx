/* eslint-disable react-refresh/only-export-components */
import { FC, useCallback, useEffect, useState } from "react";
import { Select } from "antd";
import { useUnit } from "effector-react";
import { Modal } from "@/components/Modal";
import { FormItem } from "@/components/FormItem";
import { AnalysisType } from "@/api/shared";
import { createAnalysisService } from ".";
import { CreateAnalysisContainerProps } from "./createAnalysisService.types";
import { createAnalysisMutation } from "./createAnalysisService.api";

const { inputs, outputs } = createAnalysisService;

export const awailableAnalysisTypes = [
  AnalysisType.Ultrasound,
  AnalysisType.Mammography,
  AnalysisType.CommonBloodAnalysis,
  AnalysisType.BloodBiochemistry,
  AnalysisType.Biopsy,
];

export const CreateAnalysisContainer: FC<CreateAnalysisContainerProps> = ({
  AnalysisTranslates,
  diseaseId,
}) => {
  const [type, setType] = useState<AnalysisType | null>(null);

  const { isOpen, closeModal, createAnalysis } = useUnit({
    closeModal: inputs.closeModal,
    isOpen: outputs.$isModalOpen,
    createAnalysis: createAnalysisMutation.start,
  });

  const handleCreateDisease = useCallback(() => {
    if (!type) return;

    return createAnalysis({ analysisType: type, diseaseId });
  }, [createAnalysis, diseaseId, type]);

  useEffect(() => {
    if (!isOpen) setType(null);
  }, [isOpen]);

  return (
    <Modal
      title="Добавить анализ"
      isOpen={isOpen}
      handleClose={closeModal}
      disabled={!type}
      handleSubmit={() => handleCreateDisease()}
    >
      <FormItem label="Анализ">
        <Select
          placeholder="Выберите тип анализа"
          size="large"
          value={type}
          onChange={(value) => setType(value)}
        >
          {Object.values(AnalysisType).map((type) => (
            <Select.Option
              key={type}
              value={type}
              disabled={!awailableAnalysisTypes.includes(type)}
            >
              {AnalysisTranslates.analysis[type]}
            </Select.Option>
          ))}
        </Select>
      </FormItem>
    </Modal>
  );
};
