import { useUnit } from "effector-react";
import { distributeConsilliumService } from "./distributeConsilliumService.model";
import { Modal } from "@/components/Modal";
import { FormItem } from "@/components/FormItem";
import { Select } from "antd";
import { FC, useEffect } from "react";
import { Wrapper } from "./distributeConsilliumService.styled";
import { usersListQuery } from "@/services/settings/organizationProfile/organizationProfileService.api";
import { distributeConsilliumMutation } from "./distributeConsilliumService.api";
import { ConsilliumFillDto } from "@/api/shared";
import { useFormik } from "formik";
import { validationSchema } from "./distributeConsilliumService.constants";
import { ErrorMessage } from "@/components/ErrorMessage";

const { inputs, outputs } = distributeConsilliumService;

export const DistributeConsilliumContainer: FC<{ id: number }> = ({ id }) => {
  const { isOpen, handleClose, usersList, getUsersList, fillConsillium } =
    useUnit({
      isOpen: outputs.$isOpen,
      handleClose: inputs.handleClose,
      usersList: usersListQuery.$data,
      getUsersList: usersListQuery.start,
      fillConsillium: distributeConsilliumMutation.start,
    });

  const { values, setFieldValue, setValues, errors, handleSubmit, resetForm } =
    useFormik({
      initialValues: {
        userOnConsillium: [] as number[],
        leadId: null as number | null,
      },
      onSubmit: (values) => {
        const payload: ConsilliumFillDto = {
          userOnConsillium: values.userOnConsillium,
          leadId: values.leadId!,
        };

        fillConsillium({
          ...payload,
          consilliumId: id,
        });
      },
      validationSchema,
    });

  useEffect(() => {
    getUsersList();
  }, [getUsersList]);

  useEffect(() => {
    resetForm();
  }, [resetForm, isOpen]);

  return (
    <>
      <Modal
        title="Назначить участников"
        isOpen={isOpen}
        handleClose={handleClose}
        handleSubmit={() => handleSubmit()}
      >
        <Wrapper>
          <FormItem label="Участники">
            <Select
              size="large"
              placeholder="Выберите"
              mode="multiple"
              value={values.userOnConsillium}
              onChange={(value: number[]) => {
                setValues((prev) => ({
                  ...prev,
                  userOnConsillium: value,
                  leadId: null,
                }));
              }}
              status={errors.userOnConsillium ? "error" : void 0}
            >
              {usersList?.map((user) => (
                <Select.Option key={user.id} value={user.id}>
                  {user.lastName} {user.firstName} {user.middleName}
                </Select.Option>
              ))}
            </Select>
            {errors.userOnConsillium && (
              <ErrorMessage>{errors.userOnConsillium}</ErrorMessage>
            )}
          </FormItem>
          <FormItem label="Ответственный">
            <Select
              value={values.leadId}
              onChange={(value) => setFieldValue("leadId", value)}
              size="large"
              placeholder="Выберите"
              status={errors.leadId ? "error" : void 0}
            >
              {usersList
                ?.filter((elem) => values.userOnConsillium.includes(elem.id))
                .map((user) => (
                  <Select.Option key={user.id}>
                    {user.lastName} {user.firstName} {user.middleName}
                  </Select.Option>
                ))}
            </Select>
            {errors.userOnConsillium && (
              <ErrorMessage>{errors.userOnConsillium}</ErrorMessage>
            )}
          </FormItem>
        </Wrapper>
      </Modal>
    </>
  );
};
