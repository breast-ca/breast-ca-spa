import { Modal } from "@/components/Modal";
import { createTherapyService } from "./createTherapyService.model";
import { useUnit } from "effector-react";
import { Wrapper } from "./createTherapyService.styled";
import { FormItem } from "@/components/FormItem";
import { Select } from "antd";
import { TherapyType } from "@/api/shared";
import { useMemo } from "react";
import { CreateRadiationTherapyForm } from "./CreateRadiationTherapyForm";
import { useFormik } from "formik";

const { inputs, outputs } = createTherapyService;

const awailableTherapyTypes = [TherapyType.RadiationTherapy];

export const CreateTherapyContainer = () => {
  const { isOpen, close } = useUnit({
    isOpen: outputs.$isModalOpen,
    close: inputs.closeModal,
  });

  const { values, setFieldValue } = useFormik({
    initialValues: {
      therapyType: null as TherapyType | null,
    },
    onSubmit: () => void 0,
  });

  const TherapyForm = useMemo(() => {
    const therapyForms = {
      [TherapyType.RadiationTherapy]: CreateRadiationTherapyForm,
      [TherapyType.Operation]: null,
      [TherapyType.Chemotherapy]: null,
      [TherapyType.Symptomatic]: null,
    };

    if (!values.therapyType) return null;

    return therapyForms[values.therapyType];
  }, [values.therapyType]);

  return (
    <Modal
      title="Новое лечение"
      isOpen={isOpen}
      handleClose={close}
      width={640}
    >
      <Wrapper>
        <FormItem label="Тип лечения">
          <Select
            size="large"
            placeholder="Выберите тип лечения"
            value={values.therapyType}
            onChange={(therapyType) =>
              setFieldValue("therapyType", therapyType)
            }
          >
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
        {TherapyForm && <TherapyForm />}
      </Wrapper>
    </Modal>
  );
};
