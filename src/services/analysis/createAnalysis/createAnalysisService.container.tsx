import { FC, useEffect, useState } from "react";
import { Select } from "antd";
import { useUnit } from "effector-react";
import { Modal } from "@/components/Modal";
import { FormItem } from "@/components/FormItem";
import { AnalysisType } from "@/api/shared";
import { createAnalysisService } from ".";
import { CreateAnalysisContainerProps } from "./createAnalysisService.types";

const { inputs, outputs } = createAnalysisService;

export const CreateAnalysisContainer: FC<CreateAnalysisContainerProps> = ({
  AnalysisTranslates,
}) => {
  const [type, setType] = useState<AnalysisType | null>(null);

  const { isOpen, closeModal } = useUnit({
    closeModal: inputs.closeModal,
    isOpen: outputs.$isModalOpen,
  });

  useEffect(() => {
    if (!isOpen) setType(null);
  }, [isOpen]);

  return (
    <Modal
      title="Добавить анализ"
      isOpen={isOpen}
      handleClose={closeModal}
      disabled={!type}
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
              disabled={type !== AnalysisType.Ultrasound}
            >
              {AnalysisTranslates.analysis[type]}
            </Select.Option>
          ))}
        </Select>
      </FormItem>
    </Modal>
  );
};
