import { ReactNode } from "react";

export type Props = {
  isOpen: boolean;
  title: ReactNode;
  children?: ReactNode;
  handleClose?: () => void;
  handleSubmit?: () => void;
  disabled?: boolean;
  width?: number;
  hideFooter?: boolean;
};
