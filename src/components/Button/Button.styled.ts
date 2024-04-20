import styled, { css, keyframes } from "styled-components";
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
    borderRadius: number;
  };
} = {
  middle: {
    height: 42,
    padding: 20,
    fontSize: 16,
    borderRadius: 10,
  },
  small: {
    height: 32,
    padding: 14,
    fontSize: 13,
    borderRadius: 6,
  },
};

export const IconWrapper = styled.div``;

interface Button {
  btnType: ButtonStyleType;
  size: ButtonSizeType;
  type: ButtonStyleType;
  floating?: boolean;
  disabled?: boolean;
  rounded?: boolean;
}

const disabledStyles = css`
  opacity: 0.6 !important;
  cursor: not-allowed;
`;

export const ButtonSC = styled.div<Button>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  width: ${({ floating }) => (floating ? "100%" : "min-content")};

  height: ${({ size }) => sizesOfButton[size].height};
  padding: ${({ size }) =>
    `${Math.floor(sizesOfButton[size].padding / 2.5)}px ${
      sizesOfButton[size].padding
    }px`};
  font-size: ${({ size }) => sizesOfButton[size].fontSize};

  color: ${({ type }) => typesOfButton[type].fontColor};
  border: 1px solid ${({ type }) => typesOfButton[type].borderColor};
  background: ${({ type }) => typesOfButton[type].mainColor};
  color: ${({ type }) => typesOfButton[type].fontColor};
  border-radius: ${({ size }) => sizesOfButton[size].borderRadius}px;
  font-weight: 600;
  white-space: nowrap;
  transition: 0.25s;

  &:hover {
    opacity: 0.8;
  }

  ${({ disabled }) => disabled && disabledStyles}

  ${({ rounded }) => rounded && `border-radius: 12px !important;`}
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
