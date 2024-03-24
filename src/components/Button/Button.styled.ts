import styled, { keyframes } from "styled-components";
import { Button as ButtonAntd } from "antd";
import { ButtonSizeType, ButtonStyleType } from "./Button.types";
import { ArrowClockwise } from "react-bootstrap-icons";

const typesOfButton: {
  [key in ButtonStyleType]: {
    mainColor: string;
    fontColor: string;
    shadowColor: string;
    borderColor: string;
  };
} = {
  primary: {
    mainColor: "var(--primary)",
    fontColor: "white",
    shadowColor: "var(--secondary)",
    borderColor: "var(--primary)",
  },
  danger: {
    mainColor: "var(--accent)",
    fontColor: "white",
    shadowColor: "#ff454540",
    borderColor: "var(--accent)",
  },
  ghost: {
    mainColor: "transparent",
    fontColor: "#191b35",
    shadowColor: "#00000014",
    borderColor: "#dcdee4",
  },
};

const sizesOfButton: {
  [key in ButtonSizeType]: {
    height: number;
    padding: number;
    fontSize: number;
  };
} = {
  middle: {
    height: 42,
    padding: 20,
    fontSize: 16,
  },
  small: {
    height: 32,
    padding: 14,
    fontSize: 13,
  },
};

export const IconWrapper = styled.div``;

interface Button {
  btnType: ButtonStyleType;
  size: ButtonSizeType;
  floating?: boolean;
}

export const ButtonSC = styled(ButtonAntd)<Button>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: ${({ floating }) => (floating ? "100%" : "min-content")};

  border-radius: 12px;
  font-weight: 600;

  white-space: nowrap;
  transition: 0.25s;

  &:not(&[disabled]):hover {
    transform: translateY(-4px);
    box-shadow: 0px 4px 0px
      ${({ btnType }) => typesOfButton[btnType].shadowColor};
  }

  &:not(&[disabled]):active {
    transform: translateY(-2px);
    box-shadow: 0px 2px 0px
      ${({ btnType }) => typesOfButton[btnType].shadowColor};
  }

  padding: 0 ${({ size }) => sizesOfButton[size].padding}px;
  height: ${({ size }) => sizesOfButton[size].height}px;
  font-size: ${({ size }) => sizesOfButton[size].fontSize}px;

  &,
  &:hover,
  &:active,
  &:focus,
  &[disabled],
  &[disabled]:active {
    border: none;
    background: ${({ btnType }) => typesOfButton[btnType].mainColor} !important;
    color: ${({ btnType }) => typesOfButton[btnType].fontColor} !important;

    svg {
      path {
        fill: ${({ btnType }) => typesOfButton[btnType].fontColor};
      }
    }
  }

  &[disabled] {
    opacity: 0.6;
  }
`;

const spinKeyframes = keyframes`
  from {
      transform:rotate(0deg);
  }

  to {
      transform:rotate(360deg);
  }
`;

export const SpinSC = styled(ArrowClockwise)`
  animation-name: ${spinKeyframes};
  animation-duration: 800ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;
