import { FC } from "react";
import { LoginPanel, PanelWrapper, Wrapper } from "./LoginPage.styled";
import { Props } from "./LoginPage.types";
import { LogoIcon } from "./assets/LogoIcon";
import { Input } from "antd";
import { FormItem } from "@/components/FormItem";
import { Button } from "@/components/Button";
import { useFormik } from "formik";
import { LoginDto } from "@/api/shared";
import * as yup from "yup";
import { ErrorMessage } from "@/components/ErrorMessage";

export const LoginPage: FC<Props> = ({ handleLogin, isLoading }) => {
  const { values, handleChange, errors, handleSubmit } = useFormik<LoginDto>({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      login: yup.string().required("Это поле обязательное"),
      password: yup.string().required("Это поле обязательное"),
    }),
    validateOnChange: false,
    onSubmit: handleLogin,
  });

  return (
    <Wrapper>
      <PanelWrapper>
        <LogoIcon />
        <LoginPanel>
          <FormItem label="Логин">
            <Input
              name="login"
              onChange={handleChange}
              value={values.login}
              placeholder="Введите ваш логин"
              size="large"
              status={errors.login ? "error" : void 0}
            />
            {errors.login && <ErrorMessage>{errors.login}</ErrorMessage>}
          </FormItem>
          <FormItem label="Пароль">
            <Input
              name="password"
              onChange={handleChange}
              value={values.password}
              placeholder="Введите ваш пароль"
              size="large"
              type="password"
              status={errors.password ? "error" : void 0}
            />
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          </FormItem>
          <Button
            type="primary"
            isLoading={isLoading}
            onClick={() => handleSubmit()}
          >
            Войти в систему
          </Button>
        </LoginPanel>
      </PanelWrapper>
    </Wrapper>
  );
};
