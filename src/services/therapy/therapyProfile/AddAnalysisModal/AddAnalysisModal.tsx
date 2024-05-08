import { FC, useCallback, useEffect, useState } from "react";
import { Props } from "./AddAnalysisModal.types";
import { Modal } from "@/components/Modal";
import { Select } from "antd";
import { AnalysisType } from "@/api/shared";
import { awailableAnalysisTypes } from "@/services/analysis/createAnalysis/createAnalysisService.container";
import { FormItem } from "@/components/FormItem";

export const AddAnalysisModal: FC<Props> = ({
  analysisTranslates,
  closeModal,
  isOpen,
  createAnalysis,
}) => {
  const [type, setType] = useState<AnalysisType | null>(null);

  const handleCreateDisease = useCallback(() => {
    if (!type) return;

    return createAnalysis(type);
  }, [createAnalysis, type]);

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
              {analysisTranslates.analysis[type]}
            </Select.Option>
          ))}
        </Select>
      </FormItem>
    </Modal>
  );
};
