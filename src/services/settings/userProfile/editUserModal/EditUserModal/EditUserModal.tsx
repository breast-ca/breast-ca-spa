import { FC, useMemo, useState } from "react";
import { Footer, Grid, Wrapper } from "./EditUserModal.styled";
import { Props } from "./EditUserModal.types";
import { Divider, Input, Modal, Select } from "antd";
import { FormItem } from "@/components/FormItem";
import { Button } from "@/components/Button";
import { useFormik } from "formik";
import { RoleType } from "@/api/shared";
import { Eye, EyeSlash } from "react-bootstrap-icons";
import { validationSchema } from "./EditUserModal.constants";
import { ErrorMessage } from "@/components/ErrorMessage";
import { omit } from "lodash";

export const EditUserModal: FC<Props> = ({
  userPayload,
  handleClose,
  rolesTranslates,
  isCurrentUser,
  handleEdit,
  isAdmin,
}) => {
  const [showPassword, setShowPassword] = useState(true);

  const initialValues = useMemo(() => {
    return {
      firstName: userPayload.firstName,
      lastName: userPayload.lastName,
      middleName: userPayload.middleName,
      login: userPayload.login,
      passwordText: "",
      confirmPassword: "",
      roles: userPayload.roles,
    };
  }, [userPayload]);

  const { values, handleChange, setFieldValue, errors, handleSubmit } =
    useFormik({
      initialValues,
      onSubmit: (values) => {
        const { passwordText, ...payload } = omit(values, "confirmPassword");

        handleEdit({
          ...payload,
          password: passwordText || void 0,
          userId: userPayload.id,
        });
      },
      validationSchema,
      enableReinitialize: true,
      validateOnChange: false,
    });

  return (
    <Modal
      open={Boolean(userPayload)}
      onCancel={handleClose}
      title="Изменить данные"
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
        {isAdmin && (
          <FormItem label="Роль">
            <Select
              size="large"
              placeholder="Введите отчество"
              value={values.roles}
              onChange={(values) => setFieldValue("roles", values)}
              mode="multiple"
            >
              {Object.values(RoleType).map((role) => (
                <Select.Option
                  value={role}
                  key={role}
                  disabled={isCurrentUser && role === RoleType.HeadPhysician}
                >
                  {rolesTranslates.translates[role]}
                </Select.Option>
              ))}
            </Select>
          </FormItem>
        )}
        <Divider style={{ margin: "16px 0 0", padding: 0 }} />
        <Grid temp="1fr 1fr">
          <FormItem label="Изменить пароль">
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
            />
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
