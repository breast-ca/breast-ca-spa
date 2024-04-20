import { ReactElement, ReactNode } from "react";

export type ButtonProps = {
  type?: ButtonStyleType;
  disabled?: boolean;
  icon?: ReactElement;
  size?: ButtonSizeType;
  floating?: boolean;
  isLoading?: boolean;
  children?: ReactNode;
  onClick?: () => void;
  rounded?: boolean;
};

export type ButtonSizeType = "middle" | "small";

export type ButtonStyleType = "primary" | "ghost" | "danger";
