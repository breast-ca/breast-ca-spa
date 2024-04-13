import { FC, useEffect, useState } from "react";
import { Select } from "antd";
import { useUnit } from "effector-react";
import { Modal } from "@/components/Modal";
import { FormItem } from "@/components/FormItem";
import { AnalysisType } from "@/api/shared";
import { createAnalisisService } from ".";
import { CreateAnalisisContainerProps } from "./createAnalisisService.types";

const { inputs, outputs } = createAnalisisService;

export const CreateAnalisisContainer: FC<CreateAnalisisContainerProps> = ({
  analisisTranslates,
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
              {analisisTranslates.analisis[type]}
            </Select.Option>
          ))}
        </Select>
      </FormItem>
    </Modal>
  );
};
