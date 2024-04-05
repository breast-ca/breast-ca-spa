import { FC, useEffect, useMemo, useState } from "react";
import { Footer, Grid, Wrapper } from "./CreateUserModal.styled";
import { Props } from "./CreateUserModal.types";
import { Divider, Input, Modal, Select } from "antd";
import { FormItem } from "@/components/FormItem";
import { Button } from "@/components/Button";
import { useFormik } from "formik";
import { RoleType } from "@/api/shared";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { validationSchema } from "./CreateUserModal.constants";
import { ErrorMessage } from "@/components/ErrorMessage";
import { omit } from "lodash";

export const CreateUserModal: FC<Props> = ({
  handleClose,
  rolesTranslates,
  handleAddUser,
  isModalOpen,
}) => {
  const [showPassword, setShowPassword] = useState(true);

  const initialValues = useMemo(() => {
    return {
      firstName: "",
      lastName: "",
      middleName: "",
      login: "",
      passwordText: "",
      confirmPassword: "",
      roles: [],
    };
  }, []);

  const {
    values,
    handleChange,
    setFieldValue,
    errors,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues,
    onSubmit: (values) => {
      const { passwordText, ...payload } = omit(values, "confirmPassword");

      handleAddUser({
        ...payload,
        password: passwordText,
      });
    },
    validationSchema,
    enableReinitialize: true,
    validateOnChange: false,
  });

  useEffect(resetForm, [isModalOpen, resetForm]);

  return (
    <Modal
      open={isModalOpen}
      onCancel={handleClose}
      title="Создать сотрудника"
      footer={
        <Footer>
          <Button type="ghost" onClick={handleClose}>
            Отмена
          </Button>
          <Button onClick={() => handleSubmit()}>
            Сохранить
          </Button>
        </Footer>
      }
      centered
      width={700}
    >
      <Wrapper>
        <Grid temp="1fr 1fr">
          <FormItem label="Логин">
            <Input
              size="large"
              placeholder="Введите логин"
              value={values.login}
              name="login"
              onChange={handleChange}
              status={errors.login ? "error" : void 0}
            />
            {errors.login && <ErrorMessage>{errors.login}</ErrorMessage>}
          </FormItem>
          <FormItem label="Фамилия">
            <Input
              size="large"
              placeholder="Введите фамилия"
              value={values.lastName}
              name="lastName"
              onChange={handleChange}
              status={errors.lastName ? "error" : void 0}
            />
            {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
          </FormItem>
          <FormItem label="Имя">
            <Input
              size="large"
              placeholder="Введите имя"
              value={values.firstName}
              name="firstName"
              onChange={handleChange}
              status={errors.firstName ? "error" : void 0}
            />
            {errors.firstName && (
              <ErrorMessage>{errors.firstName}</ErrorMessage>
            )}
          </FormItem>
          <FormItem label="Отчество">
            <Input
              size="large"
              placeholder="Введите отчество"
              value={values.middleName}
              name="middleName"
              onChange={handleChange}
              status={errors.middleName ? "error" : void 0}
            />
            {errors.middleName && (
              <ErrorMessage>{errors.middleName}</ErrorMessage>
            )}
          </FormItem>
        </Grid>

        <FormItem label="Роль">
          <Select
            size="large"
            placeholder="Введите отчество"
            value={values.roles}
            onChange={(values) => setFieldValue("roles", values)}
            mode="multiple"
            status={errors.roles ? "error" : void 0}
          >
            {Object.values(RoleType).map((role) => (
              <Select.Option value={role} key={role}>
                {rolesTranslates.translates[role]}
              </Select.Option>
            ))}
          </Select>
          {errors.roles && <ErrorMessage>{errors.roles}</ErrorMessage>}
        </FormItem>

        <Divider style={{ margin: "16px 0 0", padding: 0 }} />
        <Grid temp="1fr 1fr">
          <FormItem label="Пароль">
            <Input
              size="large"
              placeholder="Введите пароль"
              value={values.passwordText}
              name="passwordText"
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              suffix={
                showPassword ? (
                  <EyeSlash onClick={() => setShowPassword(false)} />
                ) : (
                  <Eye onClick={() => setShowPassword(true)} />
                )
              }
              status={errors.passwordText ? "error" : void 0}
            />
            {errors.passwordText && (
              <ErrorMessage>{errors.passwordText}</ErrorMessage>
            )}
          </FormItem>
          {values.passwordText && (
            <FormItem label="Подтвердите пароль">
              <Input
                size="large"
                placeholder="Введите пароль"
                value={values.confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                status={errors.confirmPassword ? "error" : void 0}
              />
              {errors.confirmPassword && (
                <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
              )}
            </FormItem>
          )}
        </Grid>
      </Wrapper>
    </Modal>
  );
};
