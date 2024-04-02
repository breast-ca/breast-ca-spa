import { ReactNode } from "react";

export type Props = {
  title: ReactNode;
  children?: ReactNode;
  goBack?: boolean | string;
};
