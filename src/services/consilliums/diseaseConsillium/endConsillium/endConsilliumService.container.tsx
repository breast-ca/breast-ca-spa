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

const { inputs, outputs } = endConsilliumService;

export const EndConsilliumContainer: FC<{ id: number }> = () => {
  const { isOpen, close, analysisTranslates } = useUnit({
    isOpen: outputs.$isModalOpen,
    close: inputs.closeModal,
    analysisTranslates: AnalysisTranslatesQuery.$data,
  });

  if (!analysisTranslates) return null;

  return (
    <Modal isOpen={isOpen} handleClose={close} title="Завершить консиллиум">
      <Wrapper>
        <FormItem label="Анализы">
          <Select size="large" placeholder="Выберите анализы" mode="multiple">
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
        <FormItem label="Заключение">
          <TextArea size="large" placeholder="Введите заключение" />
        </FormItem>
      </Wrapper>
    </Modal>
  );
};
