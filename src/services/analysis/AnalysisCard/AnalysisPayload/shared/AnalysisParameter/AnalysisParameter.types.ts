import { ReactNode } from "react";

export type Props = {
  name: string;
  children: ReactNode;
  fontSize?: number;
  additionalContent?: ReactNode;
  onClick?: () => void;
};
