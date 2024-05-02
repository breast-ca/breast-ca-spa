import { Modal } from "@/components/Modal";
import { createTherapyService } from "./createTherapyService.model";
import { useUnit } from "effector-react";
import { Wrapper } from "./createTherapyService.styled";
import { FormItem } from "@/components/FormItem";
import { Select } from "antd";
import { TherapyType } from "@/api/shared";

const { inputs, outputs } = createTherapyService;

const awailableTherapyTypes = [TherapyType.RadiationTherapy];

export const CreateTherapyContainer = () => {
  const { isOpen, close } = useUnit({
    isOpen: outputs.$isModalOpen,
    close: inputs.closeModal,
  });

  return (
    <Modal
      title="Новое лечение"
      isOpen={isOpen}
      handleClose={close}
      width={640}
    >
      <Wrapper>
        <FormItem label="Тип лечения">
          <Select size="large" placeholder="Выберите тип лечения">
            {Object.values(TherapyType).map((elem) => (
              <Select.Option
                key={elem}
                value={elem}
                disabled={!awailableTherapyTypes.includes(elem)}
              >
                {elem}
              </Select.Option>
            ))}
          </Select>
        </FormItem>
      </Wrapper>
    </Modal>
  );
};
