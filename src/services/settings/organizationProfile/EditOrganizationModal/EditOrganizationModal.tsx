import { FC } from "react";
import { Wrapper } from "./EditOrganizationModal.styled";
import { Props } from "./EditOrganizationModal.types";
import { Modal } from "@/components/Modal";
import { FormItem } from "@/components/FormItem";
import { Input } from "antd";
import { useFormik } from "formik";
import { EditAddressForm } from "@/components/shared/EditAddressForm";

export const EditOrganizationModal: FC<Props> = ({
  isOpen,
  handleClose,
  organization,
  handleEditOrganization,
}) => {
  const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
    initialValues: {
      name: organization.name,
      address: {
        city: organization.address.city,
        street: organization.address.street,
        houseNumber: organization.address.houseNumber,
        corpus: organization.address.corpus,
        apartementNumber: organization.address.apartementNumber,
        district: organization.address.district,
      },
    },
    onSubmit: (values) => {
      handleEditOrganization(values);
    },
  });

  return (
    <Modal
      title="Редактировать организацию"
      isOpen={isOpen}
      handleClose={handleClose}
      handleSubmit={handleSubmit}
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
        <EditAddressForm
          address={values.address}
          onChange={(field, value) => setFieldValue(`address.${field}`, value)}
        />
      </Wrapper>
    </Modal>
  );
};
