import { FC } from "react";
import { ButtonProps } from "./Button.types";
import { ButtonSC, IconWrapper } from "./Button.styled";

export const Button: FC<ButtonProps> = (props) => {
  const {
    icon,
    type = "primary",
    isLoading,
    size = "middle",
    disabled = false,
    floating,
    htmlForm,
    htmlType,
    ...antdProps
  } = props;

  return (
    <ButtonSC
      {...antdProps}
      size={size}
      btnType={type}
      floating={floating}
      disabled={disabled || isLoading}
      form={htmlForm}
      htmlType={htmlType}
      danger
    >
      {icon && !isLoading && <IconWrapper>{icon}</IconWrapper>}
      {props.children}
      {isLoading && <IconWrapper>Загрузка</IconWrapper>}
    </ButtonSC>
  );
};
