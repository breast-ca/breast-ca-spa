import { FC } from "react";
import { ButtonProps } from "./Button.types";
import { ButtonSC, IconWrapper, SpinSC } from "./Button.styled";

export const Button: FC<ButtonProps> = (props) => {
  const {
    icon,
    type = "primary",
    isLoading,
    size = "middle",
    disabled = false,
    floating,
    onClick,
  } = props;

  return (
    <ButtonSC
      type={type}
      size={size}
      btnType={type}
      floating={floating}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {!isLoading && icon}
      {!isLoading && props.children}
      {isLoading && <SpinSC />}
      {isLoading && <IconWrapper>Загрузка</IconWrapper>}
    </ButtonSC>
  );
};
