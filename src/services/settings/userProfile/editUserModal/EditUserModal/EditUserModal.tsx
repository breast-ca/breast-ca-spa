import { FC, useMemo } from "react";
import { Footer, Grid, Wrapper } from "./EditUserModal.styled";
import { Props } from "./EditUserModal.types";
import { Divider, Input, Modal, Select } from "antd";
import { FormItem } from "@/components/FormItem";
import { Button } from "@/components/Button";
import { useFormik } from "formik";
import { RoleType } from "@/api/shared";

export const EditUserModal: FC<Props> = ({
  userPayload,
  handleClose,
  rolesTranslates,
}) => {
  const isAdmin = useMemo(() => {
    return userPayload.roles.includes(RoleType.HeadPhysician);
  }, [userPayload]);

  const initialValues = useMemo(() => {
    return {
      firstName: userPayload.firstName,
      lastName: userPayload.lastName,
      middleName: userPayload.middleName,
      login: userPayload.login,
      password: "",
      confirmPassword: "",
      roles: userPayload.roles,
    };
  }, [userPayload]);

  const { values, handleChange, setFieldValue } = useFormik({
    initialValues,
    onSubmit: () => {},
    enableReinitialize: true,
  });

  return (
    <Modal
      open={Boolean(userPayload)}
      onCancel={handleClose}
      title="Изменить данные"
      footer={
        <Footer>
          <Button size="small" type="ghost" onClick={handleClose}>
            Отмена
          </Button>
          <Button size="small">Сохранить</Button>
        </Footer>
      }
      centered
      width={700}
    >
      <Wrapper>
        <Grid temp="1fr 1fr">
          <FormItem label="Логин">
            <Input
              placeholder="Введите логин"
              value={values.login}
              name="login"
              onChange={handleChange}
            />
          </FormItem>
          <FormItem label="Фамилия">
            <Input
              placeholder="Введите фамилия"
              value={values.lastName}
              name="lastName"
              onChange={handleChange}
            />
          </FormItem>
          <FormItem label="Имя">
            <Input
              placeholder="Введите имя"
              value={values.firstName}
              name="firstName"
              onChange={handleChange}
            />
          </FormItem>
          <FormItem label="Отчество">
            <Input
              placeholder="Введите отчество"
              value={values.middleName}
              name="middleName"
              onChange={handleChange}
            />
          </FormItem>
        </Grid>
        {isAdmin && (
          <FormItem label="Роль">
            <Select
              placeholder="Введите отчество"
              value={values.roles}
              onChange={(values) => setFieldValue("roles", values)}
              mode="multiple"
            >
              {Object.values(RoleType).map((role) => (
                <Select.Option value={role} key={role}>
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
              placeholder="Введите пароль"
              value={values.password}
              name="password"
              onChange={handleChange}
            />
          </FormItem>
          {values.password && (
            <FormItem label="Подтвердите пароль">
              <Input
                placeholder="Введите пароль"
                value={values.confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
              />
            </FormItem>
          )}
        </Grid>
      </Wrapper>
    </Modal>
  );
};
