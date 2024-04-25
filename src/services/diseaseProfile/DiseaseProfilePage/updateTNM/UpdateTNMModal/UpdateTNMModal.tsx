import { FC, useEffect, useMemo } from "react";
import { TNMWrapper, Wrapper } from "./UpdateTNMModal.styled";
import { Props } from "./UpdateTNMModal.types";
import { Modal } from "@/components/Modal";
import { useFormik } from "formik";
import { Select } from "antd";
import { FormItem } from "@/components/FormItem";
import {
  mOptionsList,
  nOptionsList,
  tOptionsList,
  validationSchema,
} from "./UpdateTNMModal.constants";
import { ErrorMessage } from "@/components/ErrorMessage";

export const UpdateTNMModal: FC<Props> = ({
  isOpen,
  closeModal,
  tnm,
  handleSave,
}) => {
  const initialValues = useMemo(() => {
    return {
      type: tnm?.type || null,
      T: tnm?.T,
      N: tnm?.N,
      M: tnm?.M,
    };
  }, [tnm]);

  const { values, setFieldValue, resetForm, errors, handleSubmit } = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      handleSave({
        type: values.type!,
        T: values?.T || "",
        N: values?.N || "",
        M: values?.M || "",
      });
    },
  });

  useEffect(() => resetForm(), [isOpen, resetForm]);

  return (
    <Modal
      title="Добавть TNM"
      isOpen={isOpen}
      handleClose={closeModal}
      handleSubmit={() => handleSubmit()}
    >
      <Wrapper>
        <FormItem label="TNM">
          <Select
            allowClear
            size="large"
            value={values.type}
            placeholder="Выберите"
            onChange={(value) => setFieldValue("type", value)}
            status={errors.type ? "error" : void 0}
          >
            <Select.Option value="C">C</Select.Option>
            <Select.Option value="P">P</Select.Option>
          </Select>
          {errors.type && <ErrorMessage>{errors.type}</ErrorMessage>}
        </FormItem>
        <TNMWrapper>
          <FormItem label="T">
            <Select
              allowClear
              size="large"
              value={values.T}
              onChange={(value) => setFieldValue("T", value)}
            >
              {tOptionsList.map((elem) => (
                <Select.Option key={elem} value={elem}>
                  {elem}
                </Select.Option>
              ))}
            </Select>
          </FormItem>
          <FormItem label="N">
            <Select
              allowClear
              size="large"
              value={values.N}
              onChange={(value) => setFieldValue("N", value)}
            >
              {nOptionsList.map((elem) => (
                <Select.Option key={elem} value={elem}>
                  {elem}
                </Select.Option>
              ))}
            </Select>
          </FormItem>
          <FormItem label="M">
            <Select
              allowClear
              size="large"
              value={values.M}
              onChange={(value) => setFieldValue("M", value)}
            >
              {mOptionsList.map((elem) => (
                <Select.Option key={elem} value={elem}>
                  {elem}
                </Select.Option>
              ))}
            </Select>
          </FormItem>
        </TNMWrapper>
      </Wrapper>
    </Modal>
  );
};
