import { FC } from "react";
import { Wrapper } from "./EditOrganizationModal.styled";
import { Props } from "./EditOrganizationModal.types";
import { Modal } from "@/components/Modal";
import { FormItem } from "@/components/FormItem";
import { Input } from "antd";
import { useFormik } from "formik";

export const EditOrganizationModal: FC<Props> = ({
  isOpen,
  handleClose,
  organization,
}) => {
  const { values, handleChange } = useFormik({
    initialValues: {
      name: organization.name,
    },
    onSubmit: () => {},
  });

  return (
    <Modal
      title="Редактировать организацию"
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <Wrapper>
        <FormItem label="Название">
          <Input
            placeholder="Название организации"
            value={values.name}
            onChange={handleChange}
            name="name"
          />
        </FormItem>
      </Wrapper>
    </Modal>
  );
};
