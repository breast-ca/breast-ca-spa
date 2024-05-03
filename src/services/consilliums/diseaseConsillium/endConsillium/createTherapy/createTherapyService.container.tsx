import { Modal } from "@/components/Modal";
import { createTherapyService } from "./createTherapyService.model";
import { useUnit } from "effector-react";
import { Wrapper } from "./createTherapyService.styled";
import { FormItem } from "@/components/FormItem";
import { Select } from "antd";
import {
  CreateChemoTherapyDto,
  CreateOperationDto,
  CreateRadiationTherapyDto,
  TherapyType,
} from "@/api/shared";
import { useCallback, useEffect, useMemo } from "react";
import { CreateRadiationTherapyForm } from "./CreateRadiationTherapyForm";
import { useFormik } from "formik";
import { PushTherapyPayload } from "./createTherapyService.types";
import { CreateOperationTherapyForm } from "./CreateOperationTherapyForm";
import { CreateChemoTherapyForm } from "./CreateChemoTherapyForm";

const { inputs, outputs } = createTherapyService;

const awailableTherapyTypes = [
  TherapyType.RadiationTherapy,
  TherapyType.Operation,
  TherapyType.Chemotherapy,
];

export const CreateTherapyContainer = () => {
  const { isOpen, close, onSaveTherapy } = useUnit({
    isOpen: outputs.$isModalOpen,
    close: inputs.closeModal,
    onSaveTherapy: inputs.handleSaveTherapy,
  });

  const { values, setFieldValue, resetForm, handleSubmit, setValues } =
    useFormik({
      initialValues: {
        therapyType: null as TherapyType | null,
        radiationTherapy: null as CreateRadiationTherapyDto | null,
        operation: null as CreateOperationDto | null,
        chemoTherapy: null as CreateChemoTherapyDto | null,
      },
      onSubmit: (values) => {
        console.log(values);
      },
    });

  const TherapyForm = useMemo(() => {
    const therapyForms = {
      [TherapyType.RadiationTherapy]: CreateRadiationTherapyForm,
      [TherapyType.Operation]: CreateOperationTherapyForm,
      [TherapyType.Chemotherapy]: CreateChemoTherapyForm,
      [TherapyType.Symptomatic]: null,
    };

    if (!values.therapyType) return null;

    return therapyForms[values.therapyType];
  }, [values.therapyType]);

  useEffect(() => {
    resetForm();
  }, [isOpen, resetForm]);

  const handlePushState = useCallback(
    async (payload: PushTherapyPayload) => {
      await setValues((prev) => ({
        ...prev,
        radiationTherapy: payload.radiationTherapy || null,
        operation: payload.operation || null,
        chemoTherapy: payload.chemoTherapy || null,
      }));

      handleSubmit();
    },
    [handleSubmit, setValues]
  );

  useEffect(() => {
    setValues((prev) => ({ ...prev, operation: null, radiationTherapy: null }));
  }, [setValues, values.therapyType]);

  return (
    <Modal
      title="Новое лечение"
      isOpen={isOpen}
      handleClose={close}
      width={640}
      handleSubmit={onSaveTherapy}
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
        {TherapyForm && <TherapyForm handlePushState={handlePushState} />}
      </Wrapper>
    </Modal>
  );
};
