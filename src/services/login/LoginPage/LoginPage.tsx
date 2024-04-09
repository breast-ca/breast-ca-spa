import { FC, useState } from "react";
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
import { Eye, EyeSlash } from "react-bootstrap-icons";

export const LoginPage: FC<Props> = ({ handleLogin, isLoading }) => {
  const [showPassword, setShowPassword] = useState(false);

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
              size="large"
              name="login"
              onChange={handleChange}
              value={values.login}
              placeholder="Введите ваш логин"
              status={errors.login ? "error" : void 0}
            />
            {errors.login && <ErrorMessage>{errors.login}</ErrorMessage>}
          </FormItem>
          <FormItem label="Пароль">
            <Input
              size="large"
              name="password"
              onChange={handleChange}
              value={values.password}
              placeholder="Введите ваш пароль"
              type={showPassword ? "text" : "password"}
              status={errors.password ? "error" : void 0}
              suffix={
                showPassword ? (
                  <EyeSlash onClick={() => setShowPassword(false)} />
                ) : (
                  <Eye onClick={() => setShowPassword(true)} />
                )
              }
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
