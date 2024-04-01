import { useUnit } from "effector-react";
import { createDiseaseModalService } from ".";
import { Modal } from "@/components/Modal";
import { FormWrapper } from "./createDiseaseModalService.styled";
import { FormItem } from "@/components/FormItem";
import { Input, Select } from "antd";

export const CreateDiseaseModalContainer = () => {
  const { closeModal, isOpen } = useUnit({
    isOpen: createDiseaseModalService.outputs.$isModalOpen,
    closeModal: createDiseaseModalService.inputs.closeModal,
  });

  return (
    <Modal
      title="Создать паспорт заболевания"
      isOpen={isOpen}
      handleClose={closeModal}
    >
      <FormWrapper>
        <FormItem label="Код МКБ">
          <Select placeholder="Укажите код МКБ"></Select>
        </FormItem>
        <FormItem label="Описание диагноза">
          <Input placeholder="Введите описание" />
        </FormItem>
        <FormItem label="Тип состояния опухолевого процесса">
          <Select placeholder="Выберите тип"></Select>
        </FormItem>
        <FormItem label="Сторона поражения">
          <Select placeholder="Выберите тип"></Select>
        </FormItem>
      </FormWrapper>
    </Modal>
  );
};
